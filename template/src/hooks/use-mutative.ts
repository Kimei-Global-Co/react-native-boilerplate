//base on https://github.com/mutativejs/use-mutative

import { useEffect, useRef, useState } from 'react'

import {
  create,
  type Draft,
  type Immutable,
  type Options,
  type Patches
} from 'mutative'
import { useCallbackRef } from './use-callback-ref'

type PatchesOptions =
  | boolean
  | {
      /**
       * The default value is `true`. If it's `true`, the path will be an array, otherwise it is a string.
       */
      pathAsArray?: boolean
      /**
       * The default value is `true`. If it's `true`, the array length will be included in the patches, otherwise no include array length.
       */
      arrayLengthAssignment?: boolean
    }

type DraftFunction<S> = (draft: Draft<S>) => void
type Updater<S> = (value: S | (() => S) | DraftFunction<S>) => void

type InitialValue<I> = I extends (...args: never[]) => infer R ? R : I

type Result<S, O extends PatchesOptions, F extends boolean> = O extends
  | true
  | object
  ? [F extends true ? Immutable<S> : S, Updater<S>, Patches<O>, Patches<O>]
  : F extends true
    ? [Immutable<S>, Updater<S>]
    : [S, Updater<S>]

/**
 * `useMutative` is a hook that is similar to `useState` but it uses `mutative` to handle the state updates.
 *
 *  @example
 *
 * ```ts
 * import { act, renderHook } from '@testing-library/react';
 *
 * import { useMutative } from '../src/index';
 *
 * const { result } = renderHook(() => useMutative({ items: [1] }));
 * const [state, updateState] = result.current;
 * act(() =>
 *   updateState((draft) => {
 *     draft.items.push(2);
 *   })
 * );
 * const [nextState] = result.current;
 * expect(nextState).toEqual({ items: [1, 2] });
 * ```
 */
function useMutative<
  S,
  F extends boolean = false,
  O extends PatchesOptions = false
>(
  /**
   * The initial state. You may optionally provide an initializer function to calculate the initial state.
   */
  initialValue: S,
  /**
   * Options for the `useMutative` hook.
   */
  options?: Options<O, F>
) {
  const patchesRef = useRef<{
    patches: Patches
    inversePatches: Patches
  }>({
    inversePatches: [],
    patches: []
  })
  //#region support strict mode and concurrent features
  const count = useRef(0)
  const renderCount = useRef(0)
  let currentCount = count.current
  useEffect(() => {
    count.current = currentCount
    renderCount.current = currentCount
  })
  currentCount += 1
  renderCount.current += 1
  //#endregion
  const [state, setState] = useState<InitialValue<S>>(() =>
    typeof initialValue === 'function'
      ? (initialValue as () => InitialValue<S>)()
      : (initialValue as InitialValue<S>)
  )

  const updateState = useCallbackRef((...args: unknown[]) => {
    const updater = args[0] as S | (() => S) | DraftFunction<InitialValue<S>>

    setState((latest: InitialValue<S>) => {
      const updaterFn =
        typeof updater === 'function'
          ? (updater as DraftFunction<InitialValue<S>> | (() => S))
          : () => updater as S

      const result = create(latest, updaterFn, options)

      if (options?.enablePatches) {
        // check render count, support strict mode and concurrent features
        if (
          renderCount.current === count.current ||
          renderCount.current === count.current + 1
        ) {
          // Type assertion needed due to mutative's complex return types
          const [newState, patches, inversePatches] = result as [
            InitialValue<S>,
            Patches<O>,
            Patches<O>
          ]

          Array.prototype.push.apply(patchesRef.current.patches, patches)
          // `inversePatches` should be in reverse order when multiple setState() executions
          Array.prototype.unshift.apply(
            patchesRef.current.inversePatches,
            inversePatches
          )

          return newState
        }
        return (result as [InitialValue<S>, Patches<O>, Patches<O>])[0]
      }
      return result as InitialValue<S>
    })
  })

  useEffect(() => {
    if (options?.enablePatches) {
      // Reset `patchesRef` when the component is rendered each time
      patchesRef.current.patches = []
      patchesRef.current.inversePatches = []
    }
  })
  return (
    options?.enablePatches
      ? [
          state,
          updateState,
          patchesRef.current.patches,
          patchesRef.current.inversePatches
        ]
      : [state, updateState]
  ) as Result<InitialValue<S>, O, F>
}

export { type DraftFunction, type Updater, useMutative }
