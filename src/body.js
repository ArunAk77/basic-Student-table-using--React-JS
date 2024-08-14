import './index.css'

function Tabb(){
    return(
        <div class="section">
                <div class="container">
            <table>
            <tr>
                <th> S.No</th>
                <th>Students Name</th>
                <th> Roll.no : </th>
                <th> Age :</th>
            </tr>
            <tr> 
                <td> 1</td>
                <td> Arun Kumar S </td>
                <td> 31</td>
                <td> 20</td>
            </tr>
            <tr>
            <td> 2</td>
                <td> Arun Kumar M </td>
                <td> 32</td>
                <td> 21</td>
            </tr>
            <tr>
            <td> 3</td>
                <td> Arun S </td>
                <td> 34</td>
                <td> 21</td>
            </tr>
            <tr>
            <td> 4</td>
                <td> Kumar S </td>
                <td> 42</td>
                <td> 19</td>
            </tr>
            <tr>
            <td> 5</td>
                <td> Arun S </td>
                <td> 21</td>
                <td> 23</td>
            </tr>
            </table>
        </div>
        <br></br>
        <div id='sin'>
            <label><b>Name:</b></label><input id='inpp'></input><br></br>
            <label><b>Roll.No:</b></label> <input id='inp'></input>
        <div id='btnn'>
        <button>Submit</button>
        <button> Cancel</button>
        </div>
        </div>
        <br></br>
        </div>
       
    )
}
export default Tabb;