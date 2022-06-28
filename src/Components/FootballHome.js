import React from 'react'
import { BsBell } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function FootballHome({ leagues, fixtures, display }) {
  return (
    <div className="main">
      <div className="leagues">
        <div className="header-of-content">
          LEAGUES
        </div>
        <div className="body-of-leagues">
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Republic_of_South_Africa.svg" alt="" />
            <span>Africa</span>
          </div>
          <div className="country spread">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1200px-Flag_of_Algeria.svg.png" alt="" />
            <span>Algeria</span>
          </div>
          <div className="country-leagues hidden">
            <div className="league">League 1</div>
            <div className="league">Premier league</div>
            <div className="league">Karosel B2</div>
            <div className="league">Jenim te dusho</div>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png" alt="" />
            <span>Albania</span>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1280px-Flag_of_Angola.svg.png" alt="" />
            <span>Angola</span>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Republic_of_South_Africa.svg" alt="" />
            <span>Africa</span>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1200px-Flag_of_Algeria.svg.png" alt="" />
            <span>Algeria</span>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png" alt="" />
            <span>Albania</span>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1280px-Flag_of_Angola.svg.png" alt="" />
            <span>Angola</span>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Republic_of_South_Africa.svg" alt="" />
            <span>Africa</span>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1200px-Flag_of_Algeria.svg.png" alt="" />
            <span>Algeria</span>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png" alt="" />
            <span>Albania</span>
          </div>
          <div className="country">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1280px-Flag_of_Angola.svg.png" alt="" />
            <span>Angola</span>
          </div>
        </div>
      </div>
      <div className="matches">
        <div className="header-of-content">
          <span>MATCHES</span>
        </div>
        {/* <div className="body-of-matches">
          <div className="league-in-fixtures">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/LaLiga_logo_%28stacked%29.svg/800px-LaLiga_logo_%28stacked%29.svg.png" alt="league-logo" />
            <span>LaLiga Santander</span>
          </div>
          <div className="league-match">
            <div className="time">
              <p>19:00</p>
              <p>43'</p>
            </div>
            <div className="teams">
              <p>Barcelona</p>
              <p>Alaves</p>
            </div>
            <div className="result">
              <p>3</p>
              <p>1</p>
            </div>
            <div className="details">
              <a href="">Details</a>
            </div>
            <div className="bell">
              <BsBell />
            </div>
          </div>
        </div> */}

        <div className="body-of-matches">
          <table>
            <tbody>
              <tr className='league-in-fixtures'>
                <td><img src="https://bit.ly/3R4s0RY" alt="" /></td>
                <td colSpan="4">LaLiga Santander</td>
              </tr>
              <tr className='league-match'>
                <td>
                  <div>19:00</div>
                  <div className='red'>43'</div>
                </td>
                <td>
                  <div>Barcelona</div>
                  <div>Alaves</div>
                </td>
                <td>
                  <div>3</div>
                  <div>1</div>
                </td>
                <td className='details'>
                  <Link to="">Details</Link>
                </td>
                <td>
                  <div>
                    <BsBell />
                  </div>
                </td>
              </tr>
              <tr className='league-match'>
                <td>
                  <div>19:00</div>
                  <div className='green'>43'</div>
                </td>
                <td>
                  <div>Barcelona</div>
                  <div>Alaves</div>
                </td>
                <td>
                  <div>3</div>
                  <div>1</div>
                </td>
                <td className='details'>
                  <Link to="">Details</Link>
                </td>
                <td>
                  <div>
                    <BsBell />
                  </div>
                </td>
              </tr>
              <tr className='league-match'>
                <td>
                  <div>19:00</div>
                  <div className='green'>43'</div>
                </td>
                <td>
                  <div>Barcelona</div>
                  <div>Alaves</div>
                </td>
                <td>
                  <div>3</div>
                  <div>1</div>
                </td>
                <td className='details'>
                  <Link to="">Details</Link>
                </td>
                <td>
                  <div>
                    <BsBell />
                  </div>
                </td>
              </tr>
              <tr className='league-in-fixtures'>
                <td><img src="https://bit.ly/3R4s0RY" alt="" /></td>
                <td colSpan="4">LaLiga Santander</td>
              </tr>
              <tr className='league-match'>
                <td>
                  <div>19:00</div>
                  <div className='red'>43'</div>
                </td>
                <td>
                  <div>Barcelona</div>
                  <div>Alaves</div>
                </td>
                <td>
                  <div>3</div>
                  <div>1</div>
                </td>
                <td className='details'>
                  <Link to="">Details</Link>
                </td>
                <td>
                  <div>
                    <BsBell />
                  </div>
                </td>
              </tr>
              <tr className='league-match'>
                <td>
                  <div>19:00</div>
                  <div className='green'>43'</div>
                </td>
                <td>
                  <div>Barcelona</div>
                  <div>Alaves</div>
                </td>
                <td>
                  <div>3</div>
                  <div>1</div>
                </td>
                <td className='details'>
                  <Link to="">Details</Link>
                </td>
                <td>
                  <div>
                    <BsBell />
                  </div>
                </td>
              </tr>
              <tr className='league-match'>
                <td>
                  <div>19:00</div>
                  <div className='green'>43'</div>
                </td>
                <td>
                  <div>Barcelona</div>
                  <div>Alaves</div>
                </td>
                <td>
                  <div>3</div>
                  <div>1</div>
                </td>
                <td className='details'>
                  <Link to="">Details</Link>
                </td>
                <td>
                  <div>
                    <BsBell />
                  </div>
                </td>
              </tr>
              <tr className='league-in-fixtures'>
                <td><img src="https://bit.ly/3R4s0RY" alt="" /></td>
                <td colSpan="4">LaLiga Santander</td>
              </tr>
              <tr className='league-match'>
                <td>
                  <div>19:00</div>
                  <div className='red'>43'</div>
                </td>
                <td>
                  <div>Barcelona</div>
                  <div>Alaves</div>
                </td>
                <td>
                  <div>3</div>
                  <div>1</div>
                </td>
                <td className='details'>
                  <Link to="">Details</Link>
                </td>
                <td>
                  <div>
                    <BsBell />
                  </div>
                </td>
              </tr>
              <tr className='league-match'>
                <td>
                  <div>19:00</div>
                  <div className='green'>43'</div>
                </td>
                <td>
                  <div>Barcelona</div>
                  <div>Alaves</div>
                </td>
                <td>
                  <div>3</div>
                  <div>1</div>
                </td>
                <td className='details'>
                  <Link to="">Details</Link>
                </td>
                <td>
                  <div>
                    <BsBell />
                  </div>
                </td>
              </tr>
              <tr className='league-match'>
                <td>
                  <div>19:00</div>
                  <div className='green'>43'</div>
                </td>
                <td>
                  <div>Barcelona</div>
                  <div>Alaves</div>
                </td>
                <td>
                  <div>3</div>
                  <div>1</div>
                </td>
                <td className='details'>
                  <Link to="">Details</Link>
                </td>
                <td>
                  <div>
                    <BsBell />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FootballHome