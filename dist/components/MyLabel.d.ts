/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
    * Label is for a message
    */
    label: string;
    /**
    * This will be the size of the message
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * The message can be caps
    */
    allCaps?: boolean;
    /**
    * Color of the message
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Color of the message
    */
    fontColor?: string;
    /**
    * BackgroundColor of the message
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
