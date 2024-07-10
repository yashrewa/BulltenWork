
import logo from "../assets/logo.svg"
const Header = () => {
    return (
        <header className='flex mx-auto w-[1143px] h-[116px] items-center justify-between'>
            <div><img src={logo} className='w-[194px] h-[44px]' /></div>
            <div className='flex font-product-sans justify-evenly gap-x-[18px]'>
                <div className='inline-flex items-center gap-[5px]'>
                    Managed Servers<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7.5L0 0.5H14L7 7.5Z" fill="black" />
                    </svg>
                </div>
                <div className='inline-flex items-center gap-[5px]'>
                    Managed VPS
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7.5L0 0.5H14L7 7.5Z" fill="black" />
                    </svg>
                </div>
                <div className='inline-flex items-center gap-[5px]'>
                    Budget Servers
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7.5L0 0.5H14L7 7.5Z" fill="black" />
                    </svg>
                </div>
                <div className='inline-flex items-center gap-[5px]'>
                    Managed Hosting
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7.5L0 0.5H14L7 7.5Z" fill="black" />
                    </svg>
                </div>
                <div className='inline-flex items-center gap-[5px]'>
                    Domain
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7.5L0 0.5H14L7 7.5Z" fill="black" />
                    </svg>
                </div>
                <div className='inline-flex items-center gap-[5px]'>
                    Support
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7.5L0 0.5H14L7 7.5Z" fill="black" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header