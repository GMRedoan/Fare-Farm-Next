"use client";

import React, { useEffect, useState } from "react";
import ThemeToggle from "../Theme/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import { LuLogIn } from "react-icons/lu"
import { CgLogOut } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Navbar = () => {
    const router = useRouter();
    const { loggedIn, logout } = useAuth();
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const notify = () => toast.success("You logged out successfully!")



    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    return (
        <nav
            className={`pr-4 md:px-10 flex justify-between items-center bg-base-200 sticky top-0 z-50 border-b border-primary transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
                }`}>
            <div className="flex">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-primary mt-1 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu dropdown-content bg-base-200 rounded-box z-1 mt-3 w-34 p-2 shadow space-y-1">
                        <li><NavLink href="/home">Home</NavLink></li>
                        <li><NavLink href="/products">Products</NavLink></li>
                        <li><NavLink href="/addProduct">Add Products</NavLink></li>
                        <li><NavLink href="/blog">Blog</NavLink></li>
                        <li><NavLink href="/services">Services</NavLink></li>
                    </ul>
                </div>

                {/* Left */}
                <Link href="/home" className="flex">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={65}
                        height={50}
                        className="w-13.75 h-10.5 md:w-16.25 md:h-14.5"
                    />
                </Link>
            </div>

            {/* Center */}
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-lg font-bold">
                    <li><NavLink href="/home">Home</NavLink></li>
                    <li><NavLink href="/products">Products</NavLink></li>
                    <li><NavLink href="/addProduct">Add Products</NavLink></li>
                    <li><NavLink href="/blog">Blog</NavLink></li>
                    <li><NavLink href="/services">Services</NavLink></li>

                </ul>
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
                <ThemeToggle />

                {!loggedIn ? (
                    <Link
                        href="/login"
                        className="btn btn-sm md:btn-md btn-primary rounded-xl text-white"
                    >
                        Login <LuLogIn />
                    </Link>
                ) : (
                    <button
                        onClick={() => {
                            logout();
                            router.push("/home");
                            notify()
                            Swal.fire({
                                title: "Visit again!",
                                text: "You logged out successfully!",
                                icon: "success",
                                confirmButtonText: "OK",
                                confirmButtonColor: "#f59e0b"
                            });
                        }}
                        className="btn btn-sm md:btn-md bg-red-500 rounded-xl text-white"
                    >
                        <CgLogOut />  Logout
                    </button>
                )}
                <ToastContainer autoClose={3000}
                />

            </div>
        </nav>

    );
};

export default Navbar;
