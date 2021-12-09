import Listbar from './listbar.js'
const Body = () =>{
    return(
        <div className="content">
           
           <Listbar/>
        <div className="content_rignt">

            <h2>Vous aimez le BoatOn Book ? Recommandz-le !</h2>
            <div className="book">
               <div>
               <h1>3 mois Gratuits pour vous</h1>
                <p>à chaque filleul s'abonnant*</p>
               </div>

               <div>
               <h1>3 mois Gratuits pour filleul</h1>
                <p>dès qu'il s'abonne</p>
               </div>
            </div>

            <button  className="button">J'envoie un SMS</button>
            <br/>
            <button  className="button">J'envoie un email</button>
            <br/>
            <button  className="button">Je partage l'offre sur Facebook</button>
           
            <p>Liste de mes parrainages</p>

            <table id="customers">
                <tr>
                    <th>Date</th>
                    <th>filleul</th>
                    <th>Envoi</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>6 mai <br/>  2020</td>
                    <td>[Prénon nom]</td>
                    <td>Par SMS / email</td>
                    <td>En attente/ expirée /validée</td>
                    <td><button>Renvoyer</button></td>
                </tr>
                <tr>
                <td>5 mai <br/>  2020</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                  <td>22 avr<br/> 2020</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                <td>15 avr<br/>  2020</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>


            <div className="Box_body">
            <h1>+80% </h1>  
            <p>des utilisateurs recommandent BoatOn</p>  
            </div>
            <p>*A noter: vous pouvez parrainer jusqu'à 5 filleuls sur cette page. Si vous 
                souhaitez en</p> <p> parrainer davantage, n'hésitez pas à nous envoyer
                un petit mot à paul@boaton.fr!
            </p>
            
        </div>
        </div>
    )
}
export default Body;