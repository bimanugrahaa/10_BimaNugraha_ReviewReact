import illustration from "../assets/img/Image.png"
import { useHistory } from "react-router-dom";

export default function NotFound() {

    const history = useHistory();
    const goHome = () =>{
        history.replace("/");
    }

    return(
        <div>
            <div style={{width:"fit-content", margin:"auto"}}>
                <div style={{display:"flex"}}>
                    <img style={{margin:"auto"}} src={illustration} alt="illustration"/>
                </div>
                <h1 style={{fontSize:"48px", margin:"0px", padding:"20px", textAlign:"center"}}>Oops! Something went wrong.</h1>
                <div style={{display:"flex"}}>
                    <button onClick={() => goHome()} style={{margin:"auto", borderRadius:"10px", border:"0px", width:"150px", height:"50px", alignItems:"center"}} className="btn-primary">Go home!</button>
                </div>
            </div>
        </div>
        
    )
}