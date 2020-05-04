import React from 'react'
// import img from '../../../images/strength/StrLVL1.png'
import './PerkInputs.css'

function PerkInputs(props) {

  return props.perks.map(stat => {
    const statVal = props.state.stats.filter( s =>
      s.title === stat.stat
    )[0].value

    return (
      <div className='perkfield hidden' id={`${stat.stat}-perks`}>
        {stat.perks.map(perk => {
          return (
            <div key={perk.name} className='perk-inputs'>
              <div className='perk-label`'>
              <img src={perk.img} className='perkImg tooltip' onClick={e => props.toggleTooltip(e, perk.name)}/>
              <div id={`${perk.name}-tooltip`} className='tooltiptext hidden'>{
                  perk.ranked.map(rank => {
                    return (
                      <p>Rank {rank.rank}: {rank.description}</p>
                    )
                  })}
                </div>
                <label
                  htmlFor={perk.name}
                  className={
                    (statVal < perk.rank)
                      ? 'disabled'
                      : null
                  }
                  >
                    {perk.name}
                </label>
              </div>
              <select
                id={perk.name}
                className='perkInput buttonish'
                placeholder={'choose a rank'}
                disabled={
                  statVal < perk.rank
                }
                onChange={e => props.updatePerks(perk, e.target.value, stat.stat)}
              >
                <option id={`${perk.name}1`} value='0'>Choose a rank</option>
                {perk.ranked.map(rank => {
                  return (
                  <option value={rank.rank}>Rank {rank.rank}</option>
                  )
                })}
              </select>
            </div>
          )
          })}
        </div>
    )
  })
}

PerkInputs.defaultProps = {
  perks: [
    {
      stat: '',
      perks: [
        {
          rank: 1,
          name: '',
          ranks: 1,
          ranked: [
            {
              rank: 1,
              description: ''
            }
          ]
        }
      ]
    }
  ],

  state: {
    stats: [
      {
        title: '',
        value: 1,
        index: 0
      }
    ]
  }
}

export default PerkInputs
