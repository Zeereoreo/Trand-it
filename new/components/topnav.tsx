export default function Topnav (){
    return(
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                <a className="mr-5 hover:text-gray-900">Deploy</a>
                <a className="mr-5 hover:text-gray-900">Product</a>
                <a className="mr-5 hover:text-gray-900">Business</a>
                <a className="hover:text-gray-900">Design</a>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            
                </div>
            </div>
</header>
    )
}