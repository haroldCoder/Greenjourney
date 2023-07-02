import {useState} from  'react'
import '../styles/parks.css'
import supabase from '../../supabaseConfig';

function Park(){
    const [data, setData] = useState([]);
    async function getData(){
        const { data, error } = await supabase
        .from('Ecoverso')
        .select('*');
        if (error) {
            console.error(error);
        } else {
            setData(data);
        }
    }
    getData();
    return(
        <div className='d-flex justify-content-around' style={{flexWrap: "wrap"}}>
            {
                data.map(e=>(
                    <div className='mx-2 my-4 p-3' style={{width: "30%", background: "#00000050", backdropFilter: "blur(6px)"}}>
                        <div className='text-white' style={{height: "36vh"}}>
                          <img
                                className="d-block w-100"
                                src={e.img}
                                alt="Second slide"
                                style={{"margin": "2% 0", height: "95%"}}
                            />  
                        </div>
                        <div>
                            <h3 className='text-success mb-2'>{e.name}</h3>
                            <p>{e.description}</p>
                        </div>
                  </div>
                )) 
            }  
      </div>
    )
}
export default Park;