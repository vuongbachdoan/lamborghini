import AppLogo from "../../assets/images/logo.png";
import { ReactComponent as ChatIcon } from "../../assets/images/icon_chat.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/icon_search.svg";


import './AppHeader.scss';

const headerShieldData = {
    models: [
        'Aventador',
        'Huracan',
        'Urus',
        'Pre-Owned',
        'Limited Series',
        'Comcept'
    ],
    customSolutions: [
        'Aventador',
        'Huracan',
        'Urus',
        'Pre-Owned',
        'Limited Series',
        'Comcept'
    ],
    ownerShip: [
        'Aventador',
        'Huracan',
        'Urus',
        'Pre-Owned',
        'Limited Series',
        'Comcept'
    ],
    motorSport: [
        'Aventador',
        'Huracan',
        'Urus',
        'Pre-Owned',
        'Limited Series',
        'Comcept'
    ]
}

export const AppHeader = () => {
    return (
        <nav>
            <div className="nav__left">
                <img className="nav-logo" src={AppLogo} alt="app logo" />
                <div className="navs">
                    <div>
                        <a href="">models</a>
                        <ul className="models-label">
                            {
                                headerShieldData.models.map((model, index) => (
                                    <li key={index}>
                                        <a href="#">{model}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="models">
                            {
                                headerShieldData.models.map((model, index) => (
                                    <li key={index}>
                                        <a href="#">{model}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <a href="">custom solutions</a>
                        <ul className="models-label">
                            {
                                headerShieldData.customSolutions.map((model, index) => (
                                    <li key={index}>
                                        <a href="#">{model}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="models">
                            {
                                headerShieldData.customSolutions.map((model, index) => (
                                    <li key={index}>
                                        <a href="#">{model}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <a href="">ownership</a>
                        <ul className="models-label">
                            {
                                headerShieldData.ownerShip.map((model, index) => (
                                    <li key={index}>
                                        <a href="#">{model}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="models">
                            {
                                headerShieldData.ownerShip.map((model, index) => (
                                    <li key={index}>
                                        <a href="#">{model}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <a href="">motorsport</a>
                        <ul className="models-label">
                            {
                                headerShieldData.motorSport.map((model, index) => (
                                    <li key={index}>
                                        <a href="#">{model}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="models">
                            {
                                headerShieldData.motorSport.map((model, index) => (
                                    <li key={index}>
                                        <a href="#">{model}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="nav__right">
                <div className="navs">
                    <div>
                        <a href="">dealership</a>
                    </div>
                    <div>
                        <a href="">museum</a>
                    </div>
                    <div>
                        <a href="">store</a>
                    </div>
                </div>
                <div className="nav-icons">
                    <ChatIcon className="nav-icon" />
                    <SearchIcon className="nav-icon" />
                </div>
            </div>
        </nav>
    );
}