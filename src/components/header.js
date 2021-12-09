
const Header = () =>{
    return(
        <div >
            <ul>
               <li><img src="/logo.png" alt="logo"/></li> 

               <li><div className="box">
               <img className="image" src="/stockage.jpg" alt="logo"/>
                 <p>Stockage</p>  
                   </div>
                </li>

                <li><div className="box">
               <img className="image" src="/entretien.jpg" alt="logo"/>
                 <p>Entretien</p>  
                   </div>
                </li>

                <li><div className="box">
               <img className="image" src="/assurance.jpeg" alt="logo"/>
                 <p>Assurance</p>  
                   </div>
                </li>

                <li><div className="box">
               <img className="image" src="/carnet.jpg" alt="logo"/>
                 <p>Carnet </p>  
                   </div>
                </li>

               <li><div className="phone">
               <img className="icone" src="/phone.png" alt="logo"/>
                 <p>+33 6 78 36 98</p>  
                   </div>
                </li>
                <li><a href="#">Louer mon emplacement</a></li>
                <li><a href="#">Le Blog</a></li>
                <li><button className="button_profile">Mon profil</button></li>
            </ul>
        </div>
    )
}
export default Header;