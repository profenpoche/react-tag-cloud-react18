import * as PropTypes from "prop-types";
import * as React from "react";
interface ITagCloudProps {
    children: any;
    style: {
        fontFamily?: string | ((word: any, index: number) => string);
        fontStyle?: string | ((word: any, index: number) => string);
        fontWeight?: number | string | ((word: any, index: number) => number | string);
        fontSize?: number | ((word: any, index: number) => number);
        color?: string | ((word: any, index: number) => string);
        padding?: number | ((word: any, index: number) => number);
    };
    rotate?: number | ((word: any, index: number) => number);
    spiral?: "archimedean" | "rectangular" | ((size: number) => (t: number) => [number, number]);
    random?: () => number;
}
interface ITagCloudState {
    width: number;
    height: number;
    children: any;
    wrappedChildren: any;
}
declare class TagCloud extends React.Component<ITagCloudProps, ITagCloudState> {
    static propTypes: {
        children: PropTypes.Requireable<any>;
        random: PropTypes.Requireable<(...args: any[]) => any>;
        rotate: PropTypes.Requireable<NonNullable<number | ((...args: any[]) => any) | null>>;
        spiral: PropTypes.Requireable<NonNullable<string | ((...args: any[]) => any) | null>>;
        style: PropTypes.Requireable<PropTypes.InferProps<{
            color: PropTypes.Requireable<NonNullable<string | ((...args: any[]) => any) | null>>;
            fontFamily: PropTypes.Requireable<NonNullable<string | ((...args: any[]) => any) | null>>;
            fontSize: PropTypes.Requireable<NonNullable<number | ((...args: any[]) => any) | null>>;
            fontStyle: PropTypes.Requireable<NonNullable<string | ((...args: any[]) => any) | null>>;
            fontWeight: PropTypes.Requireable<NonNullable<string | number | ((...args: any[]) => any) | null>>;
            padding: PropTypes.Requireable<NonNullable<number | ((...args: any[]) => any) | null>>;
        }>>;
    };
    static defaultProps: {
        random: () => number;
        rotate: number;
        spiral: string;
        style: {
            fontFamily: string;
            fontSize: number;
            fontStyle: string;
            fontWeight: string;
            padding: number;
        };
    };
    state: {
        children: undefined;
        height: number;
        width: number;
        wrappedChildren: never[];
    };
    private mounted;
    private resizeTimer?;
    private fontFamily;
    private fontSize;
    private fontWeight;
    private fontStyle;
    private padding;
    componentDidMount(): void;
    componentWillUnmount(): void;
    calculateLayout(props: ITagCloudProps, state: ITagCloudState): Promise<any>;
    getStyleValue(propName: "fontFamily" | "fontSize" | "fontWeight" | "fontStyle" | "padding", word: any): any;
    rotate: (word: any) => any;
    text: (word: any) => any;
    render(): React.JSX.Element;
    onResize: (contentRect: any) => void;
    componentDidUpdate(): void;
}
export default TagCloud;
