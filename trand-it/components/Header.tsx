import Link from "next/link"
import styled from "styled-components"

const HeaderMenu = styled.span`
    display: flex;
    margin: 10px;
    .div{
    }
    .bar-space {
        display: flex;
        justify-content: flex-end;
        width: 200px;
    }
    .menu .home{
        padding: 20px;
    }
    
`

export default function Header() {
    return (
        <HeaderMenu>
                <Link className='home' href='/'>Trand-IT</Link>
                <span className="bar-space"></span>
                <Link className='menu' href='/'>COMMUNITY</Link>
                <span className="bar-space"></span>
                <Link className='menu' href='/'>ETC</Link>
        </HeaderMenu>
    )
}