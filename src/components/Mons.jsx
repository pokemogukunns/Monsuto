import React from 'react'

function Mons(props) {

  const getSource = (thumb) => {
    if (thumb.endsWith(".png")) {
      return thumb
    }
    if (thumb.endsWith(".jpg")) {
      return thumb
    }
    if (thumb.includes("jpg")) {
      return thumb.split("jpg/")[0] + "jpg"
    }
    return thumb.split("png/")[0] + "png"
  }

  const countStars = (rarity) => {
    let stars = []
    for (let i = 0; i < rarity; i++) {
      stars.push("★")
    }
    if (stars.length == 0) {
      stars.push("-")
    }
    return stars
  }

  const colorsBg100 = {
    blue: 'bg-blue-100',
    yellow: 'bg-yellow-100',
    red: 'bg-red-100',
    purple: 'bg-purple-100',
    green: 'bg-green-100',
  }

  const colorsBg400 = {
    blue: 'bg-blue-400',
    yellow: 'bg-yellow-400',
    red: 'bg-red-400',
    purple: 'bg-purple-400',
    green: 'bg-green-400',
  }

  const colorsBorder800 = {
    blue: 'border-blue-800',
    yellow: 'border-yellow-800',
    red: 'border-red-800',
    purple: 'border-purple-800',
    green: 'border-green-800',
  }

  const { data } = props;
  return (
    <div
      className='bg-slate-800'
    >
      {
        data.error ? <p className='p-4 text-center text-red-400'>{data.error}</p> :
          data.monster ? data.monster.map((e, i) => {
            return (
              <div
                key={i}
                className={`grid p-3 ${e.Element ? `${colorsBg100[e.Element]}` : 'bg-slate-50'} rounded-lg shadow-md my-9 mx-auto max-w-screen-sm`}
              >
                <div
                  className='max-w-screen-lg mx-auto pb-6'
                >
                  {e.THUMB == null ? <th>No image found :(</th> :
                    <img
                      className="w-64 h-auto mx-auto"
                      src={getSource(e.THUMB)}
                      alt={`image of: ${e.ENG_Name}`}
                    />}
                </div>
                <table
                  className={`border-2 border-separate ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} text-sm m-2`}
                >
                  <tbody>
                    <tr>
                      <td
                        className={`p-2 text-center`}
                        colSpan={4}
                      >
                        {countStars(+e.Rarity.split("★")[0])}
                      </td>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black'} p-2 text-center`}
                      >
                        {e.MON_ID}
                      </th>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'} p-2 text-center`}
                      >
                        {e.ENG_Name}
                      </th>
                      <th className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'} p-2 text-center`}>
                        {e.JP_Name}
                      </th>
                      <th colSpan={2} className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'} p-4 text-center`}>
                        Sling
                      </th>
                      <td
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} p-4 text-center`}
                      >
                        {e.Sling}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'}`}
                      >
                        HP
                      </th>
                      <td
                        className={`text-center border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'}`}
                      >
                        {e.HP.split("=").slice(-1)}
                      </td>
                      <th
                        rowSpan={3}
                        colSpan={2}
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'} text-center`}
                      >
                        Type
                      </th>
                      <td
                        colSpan={2}
                        rowSpan={3}
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} text-center`}
                      >
                        {e.Type}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'}`}
                      >
                        ATK
                      </th>
                      <td
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} text-center`}
                      >
                        {e.ATK.split("=").slice(-1)}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'}`}
                      >
                        SPD
                      </th>
                      <td
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} text-center`}
                      >
                        {e.SPD.split("=").slice(-1)}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className={`bg-black border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'}`}
                        colSpan={5}
                      ></th>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'}`}
                      >
                        Ability
                      </th>
                      <td
                        colSpan={4}
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} text-center`}
                      >
                        {e.Ability}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'}`}
                      >
                        Gauge
                      </th>
                      <td
                        colSpan={5}
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} text-center`}
                      >
                        {e.Gauge}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} bg-black`}
                        colSpan={5}
                      ></th>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'} text-center`}
                        colSpan={5}
                      >
                        Strike Shot
                      </th>
                    </tr>
                    <tr>
                      <td
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} text-center p-2`}
                        colSpan={5}
                      >
                        {e.Strike_Shot}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'} text-center`}
                        colSpan={5}
                      >
                        Bump Combo
                      </th>
                    </tr>
                    <tr>
                      <td
                        colSpan={5}
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} text-center p-2`}
                      >
                        {e.Bump_Combo}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]} ${colorsBg400[e.Element]}` : 'border-black bg-gray-400'} text-center`}
                        colSpan={5}
                      >
                        Sub Bump
                      </th>
                    </tr>
                    {e.Sub_Bump.map((a, i) => {
                      return (
                        <tr
                          key={i}
                        >
                          <td
                            colSpan={5}
                            className={`border-2 ${e.Element ? `${colorsBorder800[e.Element]}` : 'border-black'} text-center p-2`}
                          >
                            {a}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table >
              </div >
            )
          }) :
            <div
              className='bg-slate-600'
            >
            </div>
      }
    </div>
  )
}

export default Mons
