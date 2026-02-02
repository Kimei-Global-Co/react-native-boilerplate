//base on https://github.com/mutativejs/use-mutative

import { useEffect, useState } from 'react'

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
  //#region support state and patches in a single bundle for purity
  const [bundle, setBundle] = useState<{
    state: InitialValue<S>
    patches: Patches<O>
    inversePatches: Patches<O>
  }>(() => {
    const initial =
      typeof initialValue === 'function'
        ? (initialValue as () => InitialValue<S>)()
        : (initialValue as InitialValue<S>)
    return {
      inversePatches: [],
      patches: [],
      state: initial
    }
  })
  //#endregion

  const updateState = useCallbackRef((...args: unknown[]) => {
    const updater = args[0] as S | (() => S) | DraftFunction<InitialValue<S>>

    setBundle((prevBundle) => {
      const updaterFn =
        typeof updater === 'function'
          ? (updater as DraftFunction<InitialValue<S>> | (() => S))
          : () => updater

      const result = create(prevBundle.state, updaterFn, options)

      if (options?.enablePatches) {
        // When patches are enabled, create returns [newState, patches, inversePatches]
        const [newState, patches, inversePatches] = result as [
          InitialValue<S>,
          Patches<O>,
          Patches<O>
        ]

        return {
          inversePatches: inversePatches.concat(prevBundle.inversePatches),
          // Append patches if multiple updates occur in a batch
          patches: prevBundle.patches.concat(patches),
          state: newState
        }
      }

      return {
        inversePatches: [],
        patches: [],
        state: result as InitialValue<S>
      }
    })
  })

  useEffect(() => {
    if (
      options?.enablePatches &&
      (bundle.patches.length > 0 || bundle.inversePatches.length > 0)
    ) {
      // Clear patches after render to match the original transient behavior.
      // This is safe because it only happens after a render that included patches.
      setBundle((prev) => ({
        ...prev,
        inversePatches: [],
        patches: []
      }))
    }
  }, [bundle.patches, bundle.inversePatches, options?.enablePatches])

  return (
    options?.enablePatches
      ? [bundle.state, updateState, bundle.patches, bundle.inversePatches]
      : [bundle.state, updateState]
  ) as Result<InitialValue<S>, O, F>
}

export { type DraftFunction, type Updater, useMutative }
