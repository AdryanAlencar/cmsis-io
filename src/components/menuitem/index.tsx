import React from 'react';

type MenuItemProps = {
    title: string,
    href: string,
    submenu?: MenuItemProps[]
}

type SubMenuProps = {
    submenu: MenuItemProps[] | undefined,
    show: boolean
}

type MenuItemState = {
    dropable: boolean,
    show: boolean
}

class MenuItem extends React.Component<MenuItemProps, MenuItemState>{
    drop: React.RefObject<HTMLAnchorElement>;

    constructor(props: MenuItemProps){
        super(props);
        this.state = {
            dropable: (this.props?.submenu?.length || 0) > 0,
            show: false
        }

        this.drop = React.createRef<HTMLAnchorElement>();

    }   

    componentDidMount(){
        if(this.state.dropable){
            this.drop.current?.addEventListener('click', () => {
                this.setState({
                    show: !this.state.show
                })
            })
        }else{
            this.drop.current?.setAttribute("href", this.props.href);
        }
    }

    render(){

        return(
            <li className={"nav-item" + (this.state.dropable? " dropdown" : "")}>
                <a 
                    className="nav-link dropdown-toggle"                     
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"                    
                    ref={this.drop}
                >
                    {this.props.title}
                </a>
                {
                    this.state.dropable ? 
                        <SubMenuItem 
                            submenu={this.props.submenu}
                            show={this.state.show}
                        />
                    : ""
                }
            </li>
        )

    }
};

class SubMenuItem extends React.Component<SubMenuProps>{

    constructor(props: SubMenuProps){
        super(props);
    }   

    render(){

        return(
            <div className={"dropdown-menu" + (this.props.show ? " show" : "")} aria-labelledby="navbarDropdown1">                
                {
                    this.props.submenu?.map((item: MenuItemProps, index: number) => {
                        return (
                            <a className="dropdown-item" href={item.href} key={index}>
                                {item.title}
                            </a>
                        )
                    })
                }
            </div>
        )

    }
};

export type { MenuItemProps, MenuItemState };
export { MenuItem }