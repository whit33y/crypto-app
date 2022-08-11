import React from 'react';

function Footer() {
    return (
        <footer className="p-4 bg-blue-300 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-blue-300">
    <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2022 Crypto app™ All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-white sm:mt-0">
        <li>
            <a href="/about" className="mr-4 hover:underline md:mr-6 ">About <span className="material-symbols-outlined">explore</span></a>
        </li>
        <li>
            <a href="/contact" className="mr-4 hover:underline md:mr-6">Contact <span className="material-symbols-outlined">smartphone</span></a>
        </li>
    </ul>
</footer>
    );
}

export default Footer;