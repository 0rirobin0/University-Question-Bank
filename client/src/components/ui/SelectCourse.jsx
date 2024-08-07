"use client";

import { GlobalContext } from "@/globalcontext/globalcontext";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Replace with your actual course data fetching logic
function fetchCourses() {
  // Implement your API call or data retrieval method here
  // (e.g., using Axios, Fetch API, etc.)
  // This example returns a static array for demonstration
  return [
    // Accounting
    {
      value: "Introduction to Accounting",
      label: "Introduction to Accounting",
    },
    { value: "Financial Accounting", label: "Financial Accounting" },
    { value: "Managerial Accounting", label: "Managerial Accounting" },
    { value: "Auditing", label: "Auditing" },
    { value: "Cost Accounting", label: "Cost Accounting" },
    {
      value: "Accounting Information Systems",
      label: "Accounting Information Systems",
    },
    { value: "Taxation", label: "Taxation" },
    { value: "Accounting for Managers", label: "Accounting for Managers" },
    { value: "Advanced Accounting", label: "Advanced Accounting" },
    { value: "Forensic Accounting", label: "Forensic Accounting" },

    // Agricultural Economics
    {
      value: "Introduction to Agricultural Economics",
      label: "Introduction to Agricultural Economics",
    },
    {
      value: "Agricultural Production Economics",
      label: "Agricultural Production Economics",
    },
    { value: "Rural Development", label: "Rural Development" },
    { value: "Farm Management", label: "Farm Management" },
    { value: "Agricultural Policy", label: "Agricultural Policy" },
    { value: "Agribusiness Management", label: "Agribusiness Management" },
    {
      value: "Economic Analysis of Agriculture",
      label: "Economic Analysis of Agriculture",
    },
    {
      value: "Quantitative Methods in Agriculture",
      label: "Quantitative Methods in Agriculture",
    },
    { value: "Agricultural Marketing", label: "Agricultural Marketing" },
    {
      value: "Natural Resource Economics",
      label: "Natural Resource Economics",
    },

    // Agricultural Engineering
    {
      value: "Introduction to Agricultural Engineering",
      label: "Introduction to Agricultural Engineering",
    },
    {
      value: "Soil and Water Engineering",
      label: "Soil and Water Engineering",
    },
    {
      value: "Farm Machinery and Equipment",
      label: "Farm Machinery and Equipment",
    },
    { value: "Irrigation Engineering", label: "Irrigation Engineering" },
    { value: "Agricultural Structures", label: "Agricultural Structures" },
    { value: "Post-Harvest Technology", label: "Post-Harvest Technology" },
    { value: "Agricultural Processing", label: "Agricultural Processing" },
    { value: "Hydraulics and Irrigation", label: "Hydraulics and Irrigation" },
    { value: "Precision Agriculture", label: "Precision Agriculture" },
    {
      value: "Renewable Energy in Agriculture",
      label: "Renewable Energy in Agriculture",
    },

    // Agricultural Extension
    {
      value: "Introduction to Agricultural Extension",
      label: "Introduction to Agricultural Extension",
    },
    {
      value: "Extension Methods and Techniques",
      label: "Extension Methods and Techniques",
    },
    {
      value: "Extension Program Planning",
      label: "Extension Program Planning",
    },
    {
      value: "Communication for Development",
      label: "Communication for Development",
    },
    { value: "Community Development", label: "Community Development" },
    { value: "Agricultural Education", label: "Agricultural Education" },
    { value: "Extension Evaluation", label: "Extension Evaluation" },
    { value: "Participatory Extension", label: "Participatory Extension" },
    { value: "Rural Sociology", label: "Rural Sociology" },
    { value: "Extension Management", label: "Extension Management" },

    // Agronomy
    { value: "Introduction to Agronomy", label: "Introduction to Agronomy" },
    { value: "Crop Production", label: "Crop Production" },
    { value: "Soil Science", label: "Soil Science" },
    { value: "Plant Breeding", label: "Plant Breeding" },
    { value: "Crop Protection", label: "Crop Protection" },
    { value: "Crop Management", label: "Crop Management" },
    {
      value: "Seed Science and Technology",
      label: "Seed Science and Technology",
    },
    {
      value: "Agricultural Biotechnology",
      label: "Agricultural Biotechnology",
    },
    { value: "Soil Fertility Management", label: "Soil Fertility Management" },
    { value: "Sustainable Agriculture", label: "Sustainable Agriculture" },

    // Animal Husbandry
    {
      value: "Introduction to Animal Husbandry",
      label: "Introduction to Animal Husbandry",
    },
    { value: "Livestock Production", label: "Livestock Production" },
    { value: "Animal Nutrition", label: "Animal Nutrition" },
    { value: "Animal Health", label: "Animal Health" },
    { value: "Breeding and Genetics", label: "Breeding and Genetics" },
    { value: "Dairy Production", label: "Dairy Production" },
    { value: "Poultry Production", label: "Poultry Production" },
    { value: "Animal Welfare", label: "Animal Welfare" },
    { value: "Animal Reproduction", label: "Animal Reproduction" },
    { value: "Animal Behavior", label: "Animal Behavior" },

    // Anthropology
    {
      value: "Introduction to Anthropology",
      label: "Introduction to Anthropology",
    },
    { value: "Cultural Anthropology", label: "Cultural Anthropology" },
    { value: "Physical Anthropology", label: "Physical Anthropology" },
    { value: "Archaeology", label: "Archaeology" },
    { value: "Anthropological Theory", label: "Anthropological Theory" },
    { value: "Ethnography", label: "Ethnography" },
    { value: "Medical Anthropology", label: "Medical Anthropology" },
    { value: "Anthropology of Religion", label: "Anthropology of Religion" },
    { value: "Economic Anthropology", label: "Economic Anthropology" },
    { value: "Political Anthropology", label: "Political Anthropology" },

    // Applied Chemistry
    {
      value: "Introduction to Applied Chemistry",
      label: "Introduction to Applied Chemistry",
    },
    { value: "Organic Chemistry", label: "Organic Chemistry" },
    { value: "Inorganic Chemistry", label: "Inorganic Chemistry" },
    { value: "Physical Chemistry", label: "Physical Chemistry" },
    { value: "Analytical Chemistry", label: "Analytical Chemistry" },
    { value: "Environmental Chemistry", label: "Environmental Chemistry" },
    { value: "Industrial Chemistry", label: "Industrial Chemistry" },
    { value: "Biochemistry", label: "Biochemistry" },
    { value: "Chemical Engineering", label: "Chemical Engineering" },
    { value: "Forensic Chemistry", label: "Forensic Chemistry" },

    // Applied Mathematics
    {
      value: "Introduction to Applied Mathematics",
      label: "Introduction to Applied Mathematics",
    },
    { value: "Calculus", label: "Calculus" },
    { value: "Differential Equations", label: "Differential Equations" },
    { value: "Linear Algebra", label: "Linear Algebra" },
    {
      value: "Probability and Statistics",
      label: "Probability and Statistics",
    },
    { value: "Numerical Methods", label: "Numerical Methods" },
    { value: "Optimization", label: "Optimization" },
    { value: "Mathematical Modeling", label: "Mathematical Modeling" },
    { value: "Discrete Mathematics", label: "Discrete Mathematics" },
    { value: "Operations Research", label: "Operations Research" },

    // Applied Physics
    {
      value: "Introduction to Applied Physics",
      label: "Introduction to Applied Physics",
    },
    { value: "Classical Mechanics", label: "Classical Mechanics" },
    { value: "Electromagnetism", label: "Electromagnetism" },
    { value: "Quantum Mechanics", label: "Quantum Mechanics" },
    { value: "Thermodynamics", label: "Thermodynamics" },
    { value: "Statistical Physics", label: "Statistical Physics" },
    { value: "Solid State Physics", label: "Solid State Physics" },
    { value: "Optics", label: "Optics" },
    { value: "Nuclear Physics", label: "Nuclear Physics" },
    { value: "Plasma Physics", label: "Plasma Physics" },

    // Architecture
    {
      value: "Introduction to Architecture",
      label: "Introduction to Architecture",
    },
    { value: "Architectural Design", label: "Architectural Design" },
    { value: "Building Construction", label: "Building Construction" },
    { value: "Architectural Theory", label: "Architectural Theory" },
    { value: "Urban Planning", label: "Urban Planning" },
    { value: "Sustainable Architecture", label: "Sustainable Architecture" },
    { value: "Structural Systems", label: "Structural Systems" },
    { value: "Building Materials", label: "Building Materials" },
    { value: "Environmental Design", label: "Environmental Design" },
    { value: "History of Architecture", label: "History of Architecture" },

    // Biochemistry
    {
      value: "Introduction to Biochemistry",
      label: "Introduction to Biochemistry",
    },
    { value: "Enzyme Chemistry", label: "Enzyme Chemistry" },
    { value: "Metabolism", label: "Metabolism" },
    { value: "Genetics", label: "Genetics" },
    { value: "Molecular Biology", label: "Molecular Biology" },
    { value: "Cell Biology", label: "Cell Biology" },
    { value: "Structural Biochemistry", label: "Structural Biochemistry" },
    { value: "Clinical Biochemistry", label: "Clinical Biochemistry" },
    { value: "Pharmacology", label: "Pharmacology" },
    { value: "Bioinformatics", label: "Bioinformatics" },

    // Biotechnology
    {
      value: "Introduction to Biotechnology",
      label: "Introduction to Biotechnology",
    },
    { value: "Genetic Engineering", label: "Genetic Engineering" },
    { value: "Cell Culture", label: "Cell Culture" },
    { value: "Bioprocessing", label: "Bioprocessing" },
    { value: "Bioinformatics", label: "Bioinformatics" },
    { value: "Microbial Biotechnology", label: "Microbial Biotechnology" },
    { value: "Plant Biotechnology", label: "Plant Biotechnology" },
    { value: "Animal Biotechnology", label: "Animal Biotechnology" },
    {
      value: "Environmental Biotechnology",
      label: "Environmental Biotechnology",
    },
    {
      value: "Pharmaceutical Biotechnology",
      label: "Pharmaceutical Biotechnology",
    },

    // Botany
    { value: "Introduction to Botany", label: "Introduction to Botany" },
    { value: "Plant Anatomy", label: "Plant Anatomy" },
    { value: "Plant Physiology", label: "Plant Physiology" },
    { value: "Plant Taxonomy", label: "Plant Taxonomy" },
    { value: "Ecology", label: "Ecology" },
    { value: "Ethnobotany", label: "Ethnobotany" },
    { value: "Plant Genetics", label: "Plant Genetics" },
    { value: "Plant Pathology", label: "Plant Pathology" },
    { value: "Algae and Fungi", label: "Algae and Fungi" },
    { value: "Environmental Botany", label: "Environmental Botany" },

    // Business Administration
    {
      value: "Introduction to Business Administration",
      label: "Introduction to Business Administration",
    },
    { value: "Principles of Management", label: "Principles of Management" },
    { value: "Marketing Management", label: "Marketing Management" },
    { value: "Financial Management", label: "Financial Management" },
    { value: "Human Resource Management", label: "Human Resource Management" },
    { value: "Operations Management", label: "Operations Management" },
    { value: "Strategic Management", label: "Strategic Management" },
    { value: "Entrepreneurship", label: "Entrepreneurship" },
    { value: "International Business", label: "International Business" },
    { value: "Business Ethics", label: "Business Ethics" },

    // Chemical Engineering
    {
      value: "Introduction to Chemical Engineering",
      label: "Introduction to Chemical Engineering",
    },
    {
      value: "Chemical Process Principles",
      label: "Chemical Process Principles",
    },
    {
      value: "Chemical Reaction Engineering",
      label: "Chemical Reaction Engineering",
    },
    { value: "Thermodynamics", label: "Thermodynamics" },
    { value: "Process Control", label: "Process Control" },
    { value: "Heat and Mass Transfer", label: "Heat and Mass Transfer" },
    {
      value: "Chemical Engineering Materials",
      label: "Chemical Engineering Materials",
    },
    { value: "Biochemical Engineering", label: "Biochemical Engineering" },
    { value: "Environmental Engineering", label: "Environmental Engineering" },
    { value: "Industrial Safety", label: "Industrial Safety" },

    // Chemistry
    { value: "Introduction to Chemistry", label: "Introduction to Chemistry" },
    { value: "Organic Chemistry", label: "Organic Chemistry" },
    { value: "Inorganic Chemistry", label: "Inorganic Chemistry" },
    { value: "Physical Chemistry", label: "Physical Chemistry" },
    { value: "Analytical Chemistry", label: "Analytical Chemistry" },
    { value: "Environmental Chemistry", label: "Environmental Chemistry" },
    { value: "Biochemistry", label: "Biochemistry" },
    { value: "Industrial Chemistry", label: "Industrial Chemistry" },
    { value: "Forensic Chemistry", label: "Forensic Chemistry" },
    { value: "Materials Chemistry", label: "Materials Chemistry" },

    // Civil Engineering
    {
      value: "Introduction to Civil Engineering",
      label: "Introduction to Civil Engineering",
    },
    { value: "Structural Analysis", label: "Structural Analysis" },
    { value: "Geotechnical Engineering", label: "Geotechnical Engineering" },
    { value: "Environmental Engineering", label: "Environmental Engineering" },
    {
      value: "Transportation Engineering",
      label: "Transportation Engineering",
    },
    {
      value: "Water Resources Engineering",
      label: "Water Resources Engineering",
    },
    { value: "Construction Management", label: "Construction Management" },
    { value: "Building Materials", label: "Building Materials" },
    { value: "Surveying", label: "Surveying" },
    { value: "Hydraulics", label: "Hydraulics" },

    // Clinical Psychology
    {
      value: "Introduction to Clinical Psychology",
      label: "Introduction to Clinical Psychology",
    },
    { value: "Abnormal Psychology", label: "Abnormal Psychology" },
    { value: "Psychopathology", label: "Psychopathology" },
    { value: "Clinical Assessment", label: "Clinical Assessment" },
    { value: "Therapeutic Techniques", label: "Therapeutic Techniques" },
    {
      value: "Cognitive Behavioral Therapy",
      label: "Cognitive Behavioral Therapy",
    },
    { value: "Psychoanalytic Therapy", label: "Psychoanalytic Therapy" },
    { value: "Developmental Psychology", label: "Developmental Psychology" },
    { value: "Health Psychology", label: "Health Psychology" },
    { value: "Clinical Research Methods", label: "Clinical Research Methods" },

    // Computer Science and Engineering
    {
      value: "Introduction to Computer Science",
      label: "Introduction to Computer Science",
    },
    { value: "Programming Fundamentals", label: "Programming Fundamentals" },
    {
      value: "Data Structures and Algorithms",
      label: "Data Structures and Algorithms",
    },
    { value: "Database Systems", label: "Database Systems" },
    { value: "Operating Systems", label: "Operating Systems" },
    { value: "Computer Networks", label: "Computer Networks" },
    { value: "Software Engineering", label: "Software Engineering" },
    { value: "Computer Architecture", label: "Computer Architecture" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Cybersecurity", label: "Cybersecurity" },

    // Criminology
    {
      value: "Introduction to Criminology",
      label: "Introduction to Criminology",
    },
    { value: "Theories of Crime", label: "Theories of Crime" },
    { value: "Criminal Justice System", label: "Criminal Justice System" },
    { value: "Forensic Science", label: "Forensic Science" },
    { value: "Victimology", label: "Victimology" },
    { value: "Criminal Psychology", label: "Criminal Psychology" },
    { value: "Juvenile Delinquency", label: "Juvenile Delinquency" },
    { value: "Crime Prevention", label: "Crime Prevention" },
    { value: "Penology", label: "Penology" },
    { value: "Comparative Criminology", label: "Comparative Criminology" },

    // Development Studies
    {
      value: "Introduction to Development Studies",
      label: "Introduction to Development Studies",
    },
    { value: "Development Theories", label: "Development Theories" },
    { value: "Sustainable Development", label: "Sustainable Development" },
    { value: "Poverty and Inequality", label: "Poverty and Inequality" },
    { value: "Rural Development", label: "Rural Development" },
    { value: "Urban Development", label: "Urban Development" },
    {
      value: "Globalization and Development",
      label: "Globalization and Development",
    },
    { value: "Development Policy", label: "Development Policy" },
    {
      value: "Human Rights and Development",
      label: "Human Rights and Development",
    },
    {
      value: "International Development Organizations",
      label: "International Development Organizations",
    },

    // Drama and Dramatics
    {
      value: "Introduction to Drama and Dramatics",
      label: "Introduction to Drama and Dramatics",
    },
    { value: "Theatre Arts", label: "Theatre Arts" },
    { value: "Stage Management", label: "Stage Management" },
    { value: "Acting Techniques", label: "Acting Techniques" },
    { value: "Directing", label: "Directing" },
    { value: "Playwriting", label: "Playwriting" },
    { value: "Dramatic Literature", label: "Dramatic Literature" },
    { value: "Theatre History", label: "Theatre History" },
    { value: "Performance Studies", label: "Performance Studies" },
    { value: "Theatre Production", label: "Theatre Production" },

    // Economics
    { value: "Introduction to Economics", label: "Introduction to Economics" },
    { value: "Microeconomics", label: "Microeconomics" },
    { value: "Macroeconomics", label: "Macroeconomics" },
    { value: "Econometrics", label: "Econometrics" },
    { value: "Development Economics", label: "Development Economics" },
    { value: "International Economics", label: "International Economics" },
    { value: "Public Economics", label: "Public Economics" },
    { value: "Labor Economics", label: "Labor Economics" },
    { value: "Industrial Organization", label: "Industrial Organization" },
    { value: "Environmental Economics", label: "Environmental Economics" },

    // Education
    { value: "Introduction to Education", label: "Introduction to Education" },
    { value: "Educational Psychology", label: "Educational Psychology" },
    {
      value: "Curriculum and Instruction",
      label: "Curriculum and Instruction",
    },
    { value: "Educational Assessment", label: "Educational Assessment" },
    { value: "Special Education", label: "Special Education" },
    { value: "Educational Leadership", label: "Educational Leadership" },
    { value: "Pedagogy", label: "Pedagogy" },
    { value: "Educational Technology", label: "Educational Technology" },
    { value: "Teacher Education", label: "Teacher Education" },
    { value: "Education Policy", label: "Education Policy" },

    // Electrical and Electronic Engineering
    {
      value: "Introduction to Electrical and Electronic Engineering",
      label: "Introduction to Electrical and Electronic Engineering",
    },
    { value: "Circuit Analysis", label: "Circuit Analysis" },
    { value: "Electromagnetics", label: "Electromagnetics" },
    { value: "Digital Electronics", label: "Digital Electronics" },
    { value: "Analog Electronics", label: "Analog Electronics" },
    { value: "Control Systems", label: "Control Systems" },
    { value: "Signal Processing", label: "Signal Processing" },
    { value: "Communication Systems", label: "Communication Systems" },
    { value: "Power Systems", label: "Power Systems" },
    { value: "Microelectronics", label: "Microelectronics" },

    // English
    {
      value: "Introduction to English Literature",
      label: "Introduction to English Literature",
    },
    { value: "English Language Skills", label: "English Language Skills" },
    { value: "English Grammar", label: "English Grammar" },
    { value: "Creative Writing", label: "Creative Writing" },
    { value: "English Linguistics", label: "English Linguistics" },
    { value: "Literary Theory", label: "Literary Theory" },
    { value: "Modern English Literature", label: "Modern English Literature" },
    { value: "Shakespeare", label: "Shakespeare" },
    { value: "American Literature", label: "American Literature" },
    { value: "Postcolonial Literature", label: "Postcolonial Literature" },

    // Environmental Science
    {
      value: "Introduction to Environmental Science",
      label: "Introduction to Environmental Science",
    },
    { value: "Ecology", label: "Ecology" },
    { value: "Environmental Chemistry", label: "Environmental Chemistry" },
    { value: "Environmental Policy", label: "Environmental Policy" },
    {
      value: "Environmental Impact Assessment",
      label: "Environmental Impact Assessment",
    },
    { value: "Sustainable Development", label: "Sustainable Development" },
    { value: "Conservation Biology", label: "Conservation Biology" },
    { value: "Climate Change", label: "Climate Change" },
    { value: "Waste Management", label: "Waste Management" },
    { value: "Environmental Management", label: "Environmental Management" },

    // Finance
    { value: "Introduction to Finance", label: "Introduction to Finance" },
    { value: "Financial Management", label: "Financial Management" },
    { value: "Investment Analysis", label: "Investment Analysis" },
    { value: "Corporate Finance", label: "Corporate Finance" },
    { value: "Risk Management", label: "Risk Management" },
    { value: "Financial Markets", label: "Financial Markets" },
    {
      value: "Financial Statement Analysis",
      label: "Financial Statement Analysis",
    },
    { value: "Behavioral Finance", label: "Behavioral Finance" },
    { value: "International Finance", label: "International Finance" },
    { value: "Personal Finance", label: "Personal Finance" },

    // Fisheries
    { value: "Introduction to Fisheries", label: "Introduction to Fisheries" },
    { value: "Aquaculture", label: "Aquaculture" },
    { value: "Fish Biology", label: "Fish Biology" },
    { value: "Fish Nutrition", label: "Fish Nutrition" },
    { value: "Fish Health", label: "Fish Health" },
    { value: "Marine Biology", label: "Marine Biology" },
    { value: "Fisheries Management", label: "Fisheries Management" },
    { value: "Post-Harvest Technology", label: "Post-Harvest Technology" },
    { value: "Aquatic Ecology", label: "Aquatic Ecology" },
    {
      value: "Fishing Gear and Techniques",
      label: "Fishing Gear and Techniques",
    },

    // Food Engineering
    {
      value: "Introduction to Food Engineering",
      label: "Introduction to Food Engineering",
    },
    { value: "Food Processing", label: "Food Processing" },
    { value: "Food Quality Control", label: "Food Quality Control" },
    { value: "Food Microbiology", label: "Food Microbiology" },
    { value: "Food Chemistry", label: "Food Chemistry" },
    { value: "Food Packaging", label: "Food Packaging" },
    {
      value: "Food Engineering Operations",
      label: "Food Engineering Operations",
    },
    { value: "Nutritional Science", label: "Nutritional Science" },
    { value: "Food Safety", label: "Food Safety" },
    { value: "Sensory Evaluation", label: "Sensory Evaluation" },

    // Forestry
    { value: "Introduction to Forestry", label: "Introduction to Forestry" },
    { value: "Forest Ecology", label: "Forest Ecology" },
    { value: "Silviculture", label: "Silviculture" },
    { value: "Forest Management", label: "Forest Management" },
    { value: "Wildlife Management", label: "Wildlife Management" },
    { value: "Forest Products", label: "Forest Products" },
    { value: "Forest Hydrology", label: "Forest Hydrology" },
    { value: "Forest Policy", label: "Forest Policy" },
    { value: "Agroforestry", label: "Agroforestry" },
    {
      value: "Climate Change and Forestry",
      label: "Climate Change and Forestry",
    },

    // Genetics
    { value: "Introduction to Genetics", label: "Introduction to Genetics" },
    { value: "Molecular Genetics", label: "Molecular Genetics" },
    { value: "Population Genetics", label: "Population Genetics" },
    { value: "Quantitative Genetics", label: "Quantitative Genetics" },
    { value: "Genetic Engineering", label: "Genetic Engineering" },
    { value: "Genomics", label: "Genomics" },
    { value: "Human Genetics", label: "Human Genetics" },
    {
      value: "Genetics of Model Organisms",
      label: "Genetics of Model Organisms",
    },
    { value: "Genetics and Disease", label: "Genetics and Disease" },
    { value: "Evolutionary Genetics", label: "Evolutionary Genetics" },

    // Geography
    { value: "Introduction to Geography", label: "Introduction to Geography" },
    { value: "Physical Geography", label: "Physical Geography" },
    { value: "Human Geography", label: "Human Geography" },
    {
      value: "Geographical Information Systems (GIS)",
      label: "Geographical Information Systems (GIS)",
    },
    { value: "Environmental Geography", label: "Environmental Geography" },
    { value: "Cartography", label: "Cartography" },
    { value: "Urban Geography", label: "Urban Geography" },
    { value: "Regional Planning", label: "Regional Planning" },
    { value: "Climate Geography", label: "Climate Geography" },
    { value: "Economic Geography", label: "Economic Geography" },

    // Geology
    { value: "Introduction to Geology", label: "Introduction to Geology" },
    { value: "Mineralogy", label: "Mineralogy" },
    { value: "Petrology", label: "Petrology" },
    { value: "Structural Geology", label: "Structural Geology" },
    { value: "Sedimentology", label: "Sedimentology" },
    { value: "Paleontology", label: "Paleontology" },
    { value: "Geophysics", label: "Geophysics" },
    { value: "Economic Geology", label: "Economic Geology" },
    { value: "Environmental Geology", label: "Environmental Geology" },
    { value: "Hydrogeology", label: "Hydrogeology" },

    // History
    { value: "Introduction to History", label: "Introduction to History" },
    { value: "World History", label: "World History" },
    { value: "Ancient History", label: "Ancient History" },
    { value: "Medieval History", label: "Medieval History" },
    { value: "Modern History", label: "Modern History" },
    { value: "Historiography", label: "Historiography" },
    { value: "Cultural History", label: "Cultural History" },
    { value: "Economic History", label: "Economic History" },
    { value: "Social History", label: "Social History" },
    { value: "Regional History", label: "Regional History" },

    // Law
    { value: "Introduction to Law", label: "Introduction to Law" },
    { value: "Legal Theory", label: "Legal Theory" },
    { value: "Constitutional Law", label: "Constitutional Law" },
    { value: "Criminal Law", label: "Criminal Law" },
    { value: "Civil Law", label: "Civil Law" },
    { value: "International Law", label: "International Law" },
    { value: "Human Rights Law", label: "Human Rights Law" },
    { value: "Environmental Law", label: "Environmental Law" },
    { value: "Corporate Law", label: "Corporate Law" },
    { value: "Intellectual Property Law", label: "Intellectual Property Law" },

    // Management
    {
      value: "Introduction to Management",
      label: "Introduction to Management",
    },
    { value: "Principles of Management", label: "Principles of Management" },
    { value: "Organizational Behavior", label: "Organizational Behavior" },
    { value: "Strategic Management", label: "Strategic Management" },
    { value: "Operations Management", label: "Operations Management" },
    { value: "Marketing Management", label: "Marketing Management" },
    { value: "Financial Management", label: "Financial Management" },
    { value: "Human Resource Management", label: "Human Resource Management" },
    { value: "International Business", label: "International Business" },
    { value: "Entrepreneurship", label: "Entrepreneurship" },

    // Mathematics
    {
      value: "Introduction to Mathematics",
      label: "Introduction to Mathematics",
    },
    { value: "Calculus", label: "Calculus" },
    { value: "Linear Algebra", label: "Linear Algebra" },
    { value: "Differential Equations", label: "Differential Equations" },
    { value: "Statistics", label: "Statistics" },
    { value: "Probability", label: "Probability" },
    { value: "Discrete Mathematics", label: "Discrete Mathematics" },
    { value: "Numerical Analysis", label: "Numerical Analysis" },
    { value: "Mathematical Logic", label: "Mathematical Logic" },
    { value: "Operations Research", label: "Operations Research" },

    // Medicine
    { value: "Introduction to Medicine", label: "Introduction to Medicine" },
    { value: "Human Anatomy", label: "Human Anatomy" },
    { value: "Human Physiology", label: "Human Physiology" },
    { value: "Pathology", label: "Pathology" },
    { value: "Pharmacology", label: "Pharmacology" },
    { value: "Microbiology", label: "Microbiology" },
    { value: "Clinical Medicine", label: "Clinical Medicine" },
    { value: "Medical Ethics", label: "Medical Ethics" },
    { value: "Surgery", label: "Surgery" },
    { value: "Internal Medicine", label: "Internal Medicine" },

    // Music
    { value: "Introduction to Music", label: "Introduction to Music" },
    { value: "Music Theory", label: "Music Theory" },
    { value: "Music History", label: "Music History" },
    { value: "Music Composition", label: "Music Composition" },
    { value: "Music Performance", label: "Music Performance" },
    { value: "Ethnomusicology", label: "Ethnomusicology" },
    { value: "Music Technology", label: "Music Technology" },
    { value: "Music Education", label: "Music Education" },
    { value: "Music Therapy", label: "Music Therapy" },
    { value: "Music Psychology", label: "Music Psychology" },

    // Pharmacy
    { value: "Introduction to Pharmacy", label: "Introduction to Pharmacy" },
    { value: "Pharmaceutics", label: "Pharmaceutics" },
    { value: "Pharmacology", label: "Pharmacology" },
    { value: "Medicinal Chemistry", label: "Medicinal Chemistry" },
    { value: "Pharmaceutical Analysis", label: "Pharmaceutical Analysis" },
    { value: "Clinical Pharmacy", label: "Clinical Pharmacy" },
    { value: "Pharmacognosy", label: "Pharmacognosy" },
    { value: "Pharmacy Practice", label: "Pharmacy Practice" },
    { value: "Pharmacy Management", label: "Pharmacy Management" },
    { value: "Pharmacy Law", label: "Pharmacy Law" },

    // Physics
    { value: "Introduction to Physics", label: "Introduction to Physics" },
    { value: "Classical Mechanics", label: "Classical Mechanics" },
    { value: "Electromagnetism", label: "Electromagnetism" },
    { value: "Quantum Mechanics", label: "Quantum Mechanics" },
    { value: "Thermodynamics", label: "Thermodynamics" },
    { value: "Optics", label: "Optics" },
    { value: "Astrophysics", label: "Astrophysics" },
    { value: "Nuclear Physics", label: "Nuclear Physics" },
    { value: "Solid State Physics", label: "Solid State Physics" },
    { value: "Particle Physics", label: "Particle Physics" },

    // Political Science
    {
      value: "Introduction to Political Science",
      label: "Introduction to Political Science",
    },
    { value: "Political Theory", label: "Political Theory" },
    { value: "Comparative Politics", label: "Comparative Politics" },
    { value: "International Relations", label: "International Relations" },
    { value: "Public Policy", label: "Public Policy" },
    { value: "Political Economy", label: "Political Economy" },
    { value: "Governance", label: "Governance" },
    { value: "Human Rights", label: "Human Rights" },
    { value: "Political Institutions", label: "Political Institutions" },
    { value: "Political Philosophy", label: "Political Philosophy" },

    // Psychology
    {
      value: "Introduction to Psychology",
      label: "Introduction to Psychology",
    },
    { value: "Cognitive Psychology", label: "Cognitive Psychology" },
    { value: "Developmental Psychology", label: "Developmental Psychology" },
    { value: "Social Psychology", label: "Social Psychology" },
    { value: "Clinical Psychology", label: "Clinical Psychology" },
    {
      value: "Industrial-Organizational Psychology",
      label: "Industrial-Organizational Psychology",
    },
    { value: "Health Psychology", label: "Health Psychology" },
    { value: "Educational Psychology", label: "Educational Psychology" },
    { value: "Neuropsychology", label: "Neuropsychology" },
    {
      value: "Research Methods in Psychology",
      label: "Research Methods in Psychology",
    },

    // Sociology
    { value: "Introduction to Sociology", label: "Introduction to Sociology" },
    { value: "Social Theory", label: "Social Theory" },
    { value: "Social Research Methods", label: "Social Research Methods" },
    { value: "Sociological Theory", label: "Sociological Theory" },
    { value: "Social Stratification", label: "Social Stratification" },
    {
      value: "Deviance and Social Control",
      label: "Deviance and Social Control",
    },
    { value: "Gender and Society", label: "Gender and Society" },
    { value: "Globalization", label: "Globalization" },
    { value: "Urban Sociology", label: "Urban Sociology" },
    { value: "Rural Sociology", label: "Rural Sociology" },

    // Statistics
    {
      value: "Introduction to Statistics",
      label: "Introduction to Statistics",
    },
    { value: "Descriptive Statistics", label: "Descriptive Statistics" },
    { value: "Inferential Statistics", label: "Inferential Statistics" },
    { value: "Probability Theory", label: "Probability Theory" },
    { value: "Statistical Inference", label: "Statistical Inference" },
    { value: "Regression Analysis", label: "Regression Analysis" },
    { value: "Experimental Design", label: "Experimental Design" },
    { value: "Multivariate Statistics", label: "Multivariate Statistics" },
    { value: "Bayesian Statistics", label: "Bayesian Statistics" },
    { value: "Nonparametric Statistics", label: "Nonparametric Statistics" },

    // Textile Engineering
    {
      value: "Introduction to Textile Engineering",
      label: "Introduction to Textile Engineering",
    },
    { value: "Textile Materials", label: "Textile Materials" },
    { value: "Textile Manufacturing", label: "Textile Manufacturing" },
    { value: "Textile Testing", label: "Textile Testing" },
    { value: "Textile Machinery", label: "Textile Machinery" },
    { value: "Textile Chemistry", label: "Textile Chemistry" },
    { value: "Garment Production", label: "Garment Production" },
    {
      value: "Textile Engineering Economics",
      label: "Textile Engineering Economics",
    },
    { value: "Sustainable Textiles", label: "Sustainable Textiles" },
    {
      value: "Textile Product Development",
      label: "Textile Product Development",
    },
    // Software Engineering
    {
      value: "SWE 121 - Structured Programming Language",
      label: "SWE 121 - Structured Programming Language",
    },
    {
      value: "SWE 122 - Structured Programming Language Lab",
      label: "SWE 122 - Structured Programming Language Lab",
    },
    {
      value: "SWE 123 - Discrete Mathematics",
      label: "SWE 123 - Discrete Mathematics",
    },
    {
      value: "EEE 101 - Basic Electrical and Electronic Circuits",
      label: "EEE 101 - Basic Electrical and Electronic Circuits",
    },
    {
      value: "EEE 102 - Basic Electrical and Electronic Circuits Lab",
      label: "EEE 102 - Basic Electrical and Electronic Circuits Lab",
    },
    {
      value: "MAT 102 - Calculus & Differential Equations",
      label: "MAT 102 - Calculus & Differential Equations",
    },
    {
      value: "PHY 103 - Mechanics, Wave, Heat & Thermodynamics",
      label: "PHY 103 - Mechanics, Wave, Heat & Thermodynamics",
    },
    { value: "BNG 105 - Bangla Language", label: "BNG 105 - Bangla Language" },

    { value: "SWE 150 - Project Work-I", label: "SWE 150 - Project Work-I" },
    { value: "SWE 127 - Data Structure", label: "SWE 127 - Data Structure" },
    {
      value: "SWE 128 - Data Structure Lab",
      label: "SWE 128 - Data Structure Lab",
    },
    {
      value: "SWE 125 - Introduction to Software Engineering",
      label: "SWE 125 - Introduction to Software Engineering",
    },
    {
      value: "PHY 207 - Electromagnetism, Optics & Modern Physics",
      label: "PHY 207 - Electromagnetism, Optics & Modern Physics",
    },
    {
      value: "MAT 103 - Coordinate Geometry & Linear Algebra",
      label: "MAT 103 - Coordinate Geometry & Linear Algebra",
    },
    {
      value: "STA 101 - Basic Statistics and Probability",
      label: "STA 101 - Basic Statistics and Probability",
    },
    {
      value: "ENG 101 - English Communication Skills",
      label: "ENG 101 - English Communication Skills",
    },
    {
      value: "ENG 102 - English Communication Skills Lab",
      label: "ENG 102 - English Communication Skills Lab",
    },

    {
      value: "SWE 223 - Theory of Computation",
      label: "SWE 223 - Theory of Computation",
    },
    {
      value: "SWE 221 - Object Oriented Programming",
      label: "SWE 221 - Object Oriented Programming",
    },
    {
      value: "SWE 222 - Object Oriented Programming Language Lab",
      label: "SWE 222 - Object Oriented Programming Language Lab",
    },
    {
      value: "SWE 225 - Numerical Analysis",
      label: "SWE 225 - Numerical Analysis",
    },
    {
      value: "SWE 226 - Numerical Analysis Lab",
      label: "SWE 226 - Numerical Analysis Lab",
    },
    {
      value: "CSE 217 - Computer Networking",
      label: "CSE 217 - Computer Networking",
    },
    {
      value: "CSE 218 - Computer Networking Lab",
      label: "CSE 218 - Computer Networking Lab",
    },
    {
      value: "BUS 201 - Cost and Management Accounting",
      label: "BUS 201 - Cost and Management Accounting",
    },

    {
      value: "SWE 250 - Project Work -II",
      label: "SWE 250 - Project Work -II",
    },
    {
      value: "SWE 229 - Database Management System",
      label: "SWE 229 - Database Management System",
    },
    {
      value: "SWE 230 - Database Management System Lab",
      label: "SWE 230 - Database Management System Lab",
    },
    {
      value: "SWE 231 - Algorithm Design & Analysis",
      label: "SWE 231 - Algorithm Design & Analysis",
    },
    {
      value: "SWE 232 - Algorithm Design & Analysis Lab",
      label: "SWE 232 - Algorithm Design & Analysis Lab",
    },
    {
      value: "SWE 233 - Software Requirement Engineering",
      label: "SWE 233 - Software Requirement Engineering",
    },
    {
      value: "SWE 234 - Software Requirement Engineering Lab",
      label: "SWE 234 - Software Requirement Engineering Lab",
    },
    {
      value: "SWE 235 - Operating System Concepts",
      label: "SWE 235 - Operating System Concepts",
    },
    {
      value: "SWE 236 - Operating System Concepts Lab",
      label: "SWE 236 - Operating System Concepts Lab",
    },

    { value: "SWE 321 - Software Design", label: "SWE 321 - Software Design" },
    {
      value: "SWE 322 - Software Design Lab",
      label: "SWE 322 - Software Design Lab",
    },
    { value: "SWE 323 - Web Technology", label: "SWE 323 - Web Technology" },
    {
      value: "SWE 324 - Web Technology Lab",
      label: "SWE 324 - Web Technology Lab",
    },
    {
      value: "SWE 325 - Computer, Data and Network Security",
      label: "SWE 325 - Computer, Data and Network Security",
    },
    {
      value: "SWE 326 - Computer, Data and Network Security Lab",
      label: "SWE 326 - Computer, Data and Network Security Lab",
    },
    {
      value: "SWE 327 - Distributed System",
      label: "SWE 327 - Distributed System",
    },
    {
      value: "SWE 328 - Distributed System Lab",
      label: "SWE 328 - Distributed System Lab",
    },
    {
      value: "CSE 319 - Computer Architecture",
      label: "CSE 319 - Computer Architecture",
    },
    {
      value: "SWE 329 - Management Information System",
      label: "SWE 329 - Management Information System",
    },

    {
      value: "SWE 350 - Project Work-III",
      label: "SWE 350 - Project Work-III",
    },
    {
      value: "SWE 331 - Software Design Pattern",
      label: "SWE 331 - Software Design Pattern",
    },
    {
      value: "SWE 332 - Software Design Pattern Lab",
      label: "SWE 332 - Software Design Pattern Lab",
    },
    {
      value: "SWE 333 - Software Testing & Quality Assurance",
      label: "SWE 333 - Software Testing & Quality Assurance",
    },
    {
      value: "SWE 334 - Software Testing & Quality Assurance Lab",
      label: "SWE 334 - Software Testing & Quality Assurance Lab",
    },
    {
      value: "SWE 335 - Computer Graphics and Image Processing",
      label: "SWE 335 - Computer Graphics and Image Processing",
    },
    {
      value: "SWE 336 - Computer Graphics and Image Processing Lab",
      label: "SWE 336 - Computer Graphics and Image Processing Lab",
    },
    {
      value: "SWE 337 - Ethics & Cyber Law",
      label: "SWE 337 - Ethics & Cyber Law",
    },
    {
      value: "SWE 340 - Technical Writing And Presentation",
      label: "SWE 340 - Technical Writing And Presentation",
    },
    {
      value: "BUS 302 - Entrepreneurship Development",
      label: "BUS 302 - Entrepreneurship Development",
    },

    { value: "SWE 440 - Internship", label: "SWE 440 - Internship" },

    { value: "SWE 450 - Thesis/Project", label: "SWE 450 - Thesis/Project" },
    {
      value: "SWE 421 - Artificial Intelligence",
      label: "SWE 421 - Artificial Intelligence",
    },
    {
      value: "SWE 422 - Artificial Intelligence Lab",
      label: "SWE 422 - Artificial Intelligence Lab",
    },
    {
      value: "SWE 425 - Software Project Management",
      label: "SWE 425 - Software Project Management",
    },
    { value: "SWE 4** - Option II", label: "SWE 4** - Option II" },
    { value: "SWE 4** - Option II Lab", label: "SWE 4** - Option II Lab" },

    {
      value: "SWE 431 - Machine Learning",
      label: "SWE 431 - Machine Learning",
    },
    {
      value: "SWE 432 - Machine Learning Lab",
      label: "SWE 432 - Machine Learning Lab",
    },
    { value: "SWE 433 - Data Science", label: "SWE 433 - Data Science" },
    {
      value: "SWE 434 - Data Science Lab",
      label: "SWE 434 - Data Science Lab",
    },
    { value: "SWE 435 - Bioinformatics", label: "SWE 435 - Bioinformatics" },
    {
      value: "SWE 436 - Bioinformatics Lab",
      label: "SWE 436 - Bioinformatics Lab",
    },
    {
      value: "SWE 437 - Natural Language Processing",
      label: "SWE 437 - Natural Language Processing",
    },
    {
      value: "SWE 438 - Natural Language Processing Lab",
      label: "SWE 438 - Natural Language Processing Lab",
    },
  ];
}

export function SelectCourse() {
  const [open, setOpen] = React.useState(false);
  const [courses, setCourses] = React.useState([]);
  const { SelectedCourse, setSelectedCourse } = useContext(GlobalContext);

  // Fetch courses on component mount (or when necessary)
  React.useEffect(() => {
    const fetchedCourses = fetchCourses();
    setCourses(fetchedCourses);

    // Initialize state from sessionStorage if available
    const sessionCourse = sessionStorage.getItem("SelectedCourse");
    if (sessionCourse) {
      setSelectedCourse(sessionCourse);
    }
  }, [setSelectedCourse]);

  const handleSelect = (currentValue) => {
    const newValue = currentValue === SelectedCourse ? "" : currentValue;
    setSelectedCourse(newValue);
    sessionStorage.setItem("SelectedCourse", newValue); // Update sessionStorage
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full overflow-hidden w-[250px] sm:w-[300px] md:w-[400px]  mx-auto justify-between focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        >
          {SelectedCourse
            ? courses.find((course) => course.value === SelectedCourse)?.label
            : "Select Course"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px]  p-0">
        <Command>
          <CommandInput placeholder="Search course..." className="h-9" />
          <CommandEmpty>No course found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {courses.map((course) => (
                <CommandItem
                  key={course.value}
                  value={course.value}
                  onSelect={() => handleSelect(course.value)}
                  onClick={(event) => {
                    console.log("CommandItem clicked:", event);
                    // Add your logic here to handle the click (optional)
                  }}
                >
                  {course.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4 ",
                      SelectedCourse === course.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
