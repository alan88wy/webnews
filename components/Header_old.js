import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 4
    return (
        <div>
            <h1 className='title'>
                <span>WebDev</span> News
            </h1>

            <style jsx>
                {`
                    .title {
                        color: ${x > 3 ? 'red' : 'blue'}
                    };


                `}
            </style>
        </div>
    )
}

export default Header

