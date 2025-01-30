import { JSX } from "react";

/**
 * PetSkeleton component renders a skeleton loading animation.
 *
 * This component is used to display a placeholder skeleton screen while
 * the actual content is being loaded. It creates a series of div elements
 * with a pulsing animation to indicate loading.
 *
 * @returns {JSX.Element} A JSX element representing the skeleton loading animation.
 */
const PetSkeleton = (): JSX.Element => {
  return (
    <div role="status" className="max-w-full animate-pulse space-y-6">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="h-12 bg-background p-4 mt-3" />
      ))}
    </div>
  );
};

export default PetSkeleton;
