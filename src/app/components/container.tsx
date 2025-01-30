/**
 * Container component that provides a responsive and centered layout.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the container.
 *
 * @returns {JSX.Element} The rendered container component.
 */
import { ContainerProps } from "../interfaces";
export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${className}`}>
      {children}
    </div>
  );
}
