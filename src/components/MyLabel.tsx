import './myLabel.css'



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
}

export const MyLabel = ( {
    allCaps = false,
    color   = 'primary',
    label   = 'No Label',
    size    = 'normal',
    fontColor,

}: MyLabelProps ) => {
  return (
    <span 
      className = { `label ${ size } text-${color}` } 
      style = {{ color: fontColor }}
    >
       { allCaps  ? label.toUpperCase()  : label }
    </span>
  )
}
