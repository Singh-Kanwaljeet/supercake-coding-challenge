/**
 * Button component that renders a button element.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to display inside the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.className] - Optional additional class names for the button.
 * @returns {JSX.Element} The rendered button element.
 */
import { Button } from "@radix-ui/themes";
import { ButtonProps } from "../interfaces";

const PrimaryButton = ({ text, onClick, style }: ButtonProps) => {
  return (
    <Button variant="soft" popover="auto" onClick={onClick} style={style}>
      {text}
    </Button>
  );
};
export default PrimaryButton;
