import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const MenuButton = ({ to, icon: Icon, tooltip, tooltipId, name }) => {
    return (
        <div className='flex'>
            <Button className='bg-transparent dark:bg-slate-950 border border-teal-900 dark:border-slate-400 rounded-md flex p-0 z-20 font-normal' >
                <Link className='w-40 h-40 justify-center flex flex-col items-center gap-2' to={to} smooth={true} duration={500} data-tooltip-id={tooltipId}>
                    {Icon && <Icon className='text-3xl text-teal-800 dark:text-white' />}
                    <p className='text-teal-800'>{name}</p>
                </Link>
            </Button>
            <Tooltip id={tooltipId} style={{ backgroundColor: "rgb(10, 10, 10)", color: "white", borderRadius: "10px", zIndex: "100" }}

                content={tooltip}
                events={['hover']}
            >

            </Tooltip>


        </div>
    );
};

export default MenuButton;