import { useState } from "react";

import { Block } from "../block";
import { Image } from "../image";
import type { TAvatarProps } from "./type";

export default function Avatar(props: TAvatarProps): React.JSX.Element {
	const { size, borderRadius = 999, enableSkeleton, ...rest } = props;
	const [isLoading, setIsLoading] = useState(enableSkeleton);

	const renderAvatar = () => {
		return (
			<Block radius={borderRadius} size={size}>
				<Image
					alt="Avatar"
					borderRadius={borderRadius}
					recyclingKey={props.url}
					size={size}
					source={props.url}
					style={{ height: size, width: size }}
					{...(enableSkeleton
						? {
								onLoad: (): void => setIsLoading(false),
								onLoadStart: (): void => setIsLoading(true),
							}
						: {})}
					{...rest}
				/>
				{props.children}
			</Block>
		);
	};

	if (enableSkeleton && isLoading) {
		return (
			<Block radius={borderRadius} size={size}>
				{renderAvatar()}
			</Block>
		);
	}
	return renderAvatar();
}
