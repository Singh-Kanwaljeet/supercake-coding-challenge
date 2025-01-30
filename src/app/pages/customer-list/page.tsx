"use client";
import { motion } from "framer-motion";

import Container from "@/app/components/container";
import DropDown from "@/app/components/drop-down";
import Search from "@/app/components/search";
import PetSkeleton from "@/app/components/skeleton";
import { fetchCustomers } from "@/app/api-hooks/customer";
import { Customer } from "@/app/interfaces";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CustomerList() {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedAnimals, setSelectedAnimals] = useState<{ name: string }[]>([
    { name: "Any Animal" },
  ]);

  // Fetch customer data on component mount
  // Client side rendering
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const data = await fetchCustomers();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
        toast.error("Error fetching customers");
      }
      setLoading(false);
    }
    loadData();
  }, []);

  // Handle dropdown selection change
  const handleSelectionChange = (selected: { name: string }[]) => {
    setSelectedAnimals(
      selected.length === 0 ? [{ name: "Any Animal" }] : selected,
    );
  };

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Check if "Any Animal" is selected
  const isAnyAnimalSelected = selectedAnimals.some(
    (animal) => animal.name.toLowerCase() === "any animal",
  );

  // Get selected species names in lowercase
  const selectedSpecies = selectedAnimals
    .filter((animal) => animal.name !== "Any Animal")
    .map((animal) => animal.name.toLowerCase());

  // Filter customers based on selected animals and search query
  const filteredCustomers = customers
    .map((customer) => {
      const filteredPets = isAnyAnimalSelected
        ? customer.pets
        : customer.pets.filter((pet) =>
            selectedSpecies.includes(pet.species.toLowerCase()),
          );

      const matchesSearch =
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.pets.some((pet) =>
          pet.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      return (filteredPets.length > 0 || isAnyAnimalSelected) && matchesSearch
        ? { ...customer, pets: filteredPets }
        : null;
    })
    .filter(Boolean) as Customer[];

  return (
    <Container>
      <div className="space-y-6 bg-background py-6 px-7">
        <h1 className="text-2xl font-semibold font-poppins">
          Customers and Pets
        </h1>
        <div className="flex justify-start items-start flex-wrap gap-5 ">
          <Search
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
          />
          <DropDown onSelectionChange={handleSelectionChange} />
        </div>
      </div>

      {loading ? (
        <div className="mt-6">
          <PetSkeleton />
        </div>
      ) : (
        <div className="mt-4">
          <h2 className="text-lg font-semibold underline">Customers</h2>
          <ul>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <motion.div
                  key={customer.id}
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: "easeInOut", duration: 0.2 }}
                >
                  <li className="border p-3 rounded-lg my-2 shadow-sm">
                    <h2>
                      {" "}
                      <span>
                        <strong>{customer.name}</strong>
                      </span>{" "}
                      - <span>{customer.email}</span> -{" "}
                      <span>{customer.phone}</span>
                    </h2>
                    <ul className="ml-4 mt-2">
                      {customer.pets.map((pet, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          🐾 {pet.name} ({pet.species})
                        </li>
                      ))}
                    </ul>
                  </li>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500">
                No customers found that meet your criteria.
              </p>
            )}
          </ul>
        </div>
      )}
    </Container>
  );
}
