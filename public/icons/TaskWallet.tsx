// icons/TaskWallet.tsx

/**
 * This project was developed by Nikandr Surkov.
 * 
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

import { IconProps } from "../utils/types";

const TaskWallet: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={svgSize} width={svgSize} viewBox="0 0 40 40" fill="none">
            <rect height="40" width="40" rx="10" fill="#4C9CE2" />
            <path d="M28.1007 24.4696C26.2461 24.4696 23.7454 24.8717 22.1417 23.7645C20.7507 22.8042 20.5786 21.332 20.5786 19.7828C20.5786 17.9139 20.6571 16.2388 22.4347 15.1417C23.215 14.6602 23.995 14.7054 24.877 14.7054H28.1007C27.93 13.1329 26.1959 12.2274 24.7793 12.0858C22.5131 11.8593 20.1215 12.0691 17.8433 12.0691C16.4411 12.0691 14.8097 11.8562 13.4473 12.2438C12.2399 12.5871 11.1573 13.7589 10.9395 14.9983C10.7483 16.0861 10.8097 17.2183 10.8097 18.3182V21.5403C10.8097 23.4059 10.8457 25.2394 12.5681 26.387C13.7003 27.1415 15.1777 27.0083 16.4757 27.0083H22.044C23.2886 27.0083 24.5386 27.0926 25.7562 26.7896C26.8414 26.5195 27.8273 25.5513 28.1007 24.4696ZM23.607 16.0264C21.5649 16.4975 21.69 19.0311 21.9048 20.6616C21.9906 21.3132 22.0174 21.8713 22.4864 22.3897C23.5047 23.5155 25.5638 23.1026 26.9284 23.1026C27.4665 23.1026 28.0617 23.1719 28.5892 23.051C30.4967 22.6132 30.3476 20.6341 30.3476 19.0993C30.3476 18.2938 30.3807 17.4125 29.8259 16.7598C28.8233 15.5803 26.7445 15.9748 25.3654 15.9748C24.7973 15.9748 24.1635 15.8981 23.607 16.0264Z" fill="#FEFFFF" />
        </svg>
    );
};

export default TaskWallet;