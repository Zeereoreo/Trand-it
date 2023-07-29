import Link from "next/link"
import styled from "styled-components"

const HeaderMenu = styled.span`
    display: flex;
    justify-content: center;
    margin: 10px;
    .div{
        margin: 10;
        display: flex;
        justify-content: space-between;
    }
    .home{
        justify-content: flex-end;
    }
    .menu{
        padding: 20px;
    }
    
`

export default function Header() {
    return (
        <HeaderMenu>
            <div>
                <Link className='home' href='/'>Trand-IT</Link>
                <Link className='menu' href='/'>COMMUNITY</Link>
                <Link className='menu' href='/'>ETC</Link>
            </div>
        </HeaderMenu>
    )
}