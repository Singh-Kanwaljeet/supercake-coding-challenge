"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { DropdownIcon } from "./SVGs";
import { Animal, DropDownProps } from "../interfaces";
import FilterButtons from "./filter-buttons";
import animals from "./animals-array";

export default function DropDown({ onSelectionChange }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnimals, setSelectedAnimals] = useState<Animal[]>([
    { name: "Any Animal" },
  ]);

  // Handle selection of an animal
  const handleSelect = (animal: Animal) => {
    setSelectedAnimals((prevSelected) => {
      if (animal.name === "Any Animal") {
        return [{ name: "Any Animal" }];
      }
      const isAlreadySelected = prevSelected.some(
        (selected) => selected.name === animal.name,
      );
      const newSelection = isAlreadySelected
        ? prevSelected.filter((selected) => selected.name !== animal.name)
        : [...prevSelected.filter((a) => a.name !== "Any Animal"), animal];
      return newSelection.length > 0 ? newSelection : [{ name: "Any Animal" }];
    });
  };

  // Apply selected filters
  const handleApplyFilters = () => {
    const isAnyAnimalSelected = selectedAnimals.some(
      (animal) => animal.name === "Any Animal",
    );
    const appliedFilters = isAnyAnimalSelected ? [] : selectedAnimals;
    onSelectionChange(appliedFilters);
    setIsOpen(false);
  };

  // Reset filters to default
  const handleReset = () => {
    setSelectedAnimals([{ name: "Any Animal" }]);
    onSelectionChange([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full sm:max-w-[330px] lg:w-[260px] md-w-[160px] max-w-[412px]">
      <div
        className="dropdown w-full lg:w-[260px] md:w-[160px] sm:max-w-[412px]"
        data-dui-placement="bottom"
      >
        <button
          data-dui-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full lg:w-[260px] sm:w-[412px] md:w-[160px] inline-flex items-center justify-center border align-middle select-none font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-3 px-5 bg-transparent border-transparent border-border text-stone-800 bg-white shadow-none hover:shadow-none"
        >
          {selectedAnimals.length > 0
            ? selectedAnimals.map((animal) => animal.name).join(", ")
            : "Pets"}
          <DropdownIcon />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                opacity: { duration: 0.3, ease: "easeInOut" },
                y: { duration: 0.3, ease: "easeInOut" },
              }}
              className="absolute mt-2 lg:w-[260px] md:w-[160px] sm:min-w-[334px] bg-white border border-stone-200 rounded-lg shadow-sm z-10 right-0"
            >
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 flex-wrap m-4">
                  {animals.map((animal) => (
                    <motion.div
                      whileHover={{ scale: 1.1, y: -1 }}
                      transition={{ type: "easeInOut", duration: 0.2 }}
                      key={animal.name}
                    >
                      <button
                        key={animal.name}
                        onClick={() => handleSelect(animal)}
                        className={`select_animal flex items-center gap-1 rounded-full border px-[15px] py-1.5 text-sm ${
                          selectedAnimals.some(
                            (selected) => selected.name === animal.name,
                          )
                            ? "bg-primary text-white"
                            : ""
                        }`}
                      >
                        {animal.icon && (
                          <motion.div
                            whileHover={{ scale: 1.1, y: -1 }}
                            transition={{ type: "easeInOut", duration: 0.2 }}
                          >
                            <Image
                              src={animal.icon}
                              alt={animal.name}
                              width={18}
                              height={18}
                              className="h-[18px] w-[18px]"
                            />
                          </motion.div>
                        )}
                        {animal.name}
                      </button>
                    </motion.div>
                  ))}
                </div>
                <div className="border-t border-border">
                  <FilterButtons
                    handleReset={handleReset}
                    handleApplyFilters={handleApplyFilters}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
