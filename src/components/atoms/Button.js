import { motion } from "framer-motion";
export default function Button({ children, variant = "default", size = "md", ...props }) {
    const baseClass = "inline-flex align-center rounded-full px-4 py-2 mt-3 font-600 text-uppercase focus:outline-none cursor-pointer";
    const variants = {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        outline: "border border-blue-500 text-blue-500 bg-white hover:bg-blue-100",
        danger: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
    };

    const sizes = {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-3",
    };

    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }}

            // ✅ Hover effect with its own transition (0.2s, faster)
            whileHover={{ scale: 1.03, transition: { duration: 0.15, ease: "easeInOut" } }}

            // ✅ Click effect with its own transition (0.1s, very fast)
            whileTap={{ scale: 1, transition: { duration: 0.1, ease: "easeInOut" } }}

            className={`${baseClass} ${variants[variant]} ${sizes[size]}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}
