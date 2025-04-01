// import { ChevronDownIcon, SearchIcon } from "lucide-react";
// import React from "react";

// // Custom button component
// const Button = ({ children, className = "", ...props }) => (
//   <button
//     className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
//     {...props}
//   >
//     {children}
//   </button>
// );

// // Custom input component
// const Input = ({ className = "", ...props }) => (
//   <input className={`px-3 py-2 border rounded w-full ${className}`} {...props} />
// );

// // Custom separator component
// const Separator = () => <hr className="my-4 border-gray-300" />;

// export const SignUp =>() => {
//   // Navigation links data
//   const navLinks = [
//     { name: "Home", path: "#", active: false },
//     { name: "Contact", path: "#", active: false },
//     { name: "About", path: "#", active: false },
//     { name: "Sign Up", path: "#", active: true },
//   ];

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       {/* Navigation Bar */}
//       <nav className="flex gap-4 mb-6">
//         {navLinks.map((link, index) => (
//           <a
//             key={index}
//             href={link.path}
//             className={`px-4 py-2 ${link.active ? "font-bold text-blue-600" : "text-gray-600"}`}
//           >
//             {link.name}
//           </a>
//         ))}
//       </nav>

//       <Separator />

//       {/* Search Bar */}
//       <div className="relative mb-6 w-full max-w-md">
//         <SearchIcon className="absolute left-3 top-3 text-gray-500" />
//         <Input
//           type="text"
//           placeholder="Search..."
//           className="pl-10"
//         />
//       </div>

//       {/* Sign-up Form */}
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block mb-1">Email</label>
//             <Input type="email" placeholder="Enter your email" required />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1">Password</label>
//             <Input type="password" placeholder="Enter your password" required />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1">Confirm Password</label>
//             <Input type="password" placeholder="Confirm your password" required />
//           </div>
//           <Button type="submit" className="w-full">Sign Up</Button>
//         </form>
//       </div>
//     </div>
//   );
// };

import { ChevronDownIcon, SearchIcon } from "lucide-react";
import React from "react";

// Custom button component
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Custom input component
const Input = ({ className = "", ...props }) => (
  <input className={`px-3 py-2 border rounded w-full ${className}`} {...props} />
);

// Custom separator component
const Separator = () => <hr className="my-4 border-gray-300" />;

const SignUp = () => {
  // Navigation links data
  const navLinks = [
    { name: "Home", path: "#", active: false },
    { name: "Contact", path: "#", active: false },
    { name: "About", path: "#", active: false },
    { name: "Sign Up", path: "#", active: true },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex gap-4 mb-6">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className={`px-4 py-2 ${link.active ? "font-bold text-blue-600" : "text-gray-600"}`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <Separator />

      {/* Search Bar */}
      <div className="relative mb-6 w-full max-w-md">
        <SearchIcon className="absolute left-3 top-3 text-gray-500" />
        <Input
          type="text"
          placeholder="Search..."
          className="pl-10"
        />
      </div>

      {/* Sign-up Form */}
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <Input type="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <Input type="password" placeholder="Enter your password" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Confirm Password</label>
            <Input type="password" placeholder="Confirm your password" required />
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
