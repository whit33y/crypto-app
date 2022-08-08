import React from 'react';
function Footer() {
    return (
        <footer class="p-4 bg-blue-300 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-blue-300">
    <span class="text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2022 Crypto app™ All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-white sm:mt-0">
        <li>
            <a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="/contact" class="mr-4 hover:underline md:mr-6">Contact</a>
        </li>
    </ul>
</footer>
    );
}

export default Footer;