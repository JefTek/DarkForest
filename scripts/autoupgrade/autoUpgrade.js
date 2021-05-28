// from https://www.reddit.com/r/DarkForestOnline/comments/j7jksm/guide_how_to_use_a_script_to_automatically/
//The script will prioritize evening out your planet upgrades. So if you have [Range 1 | Speed 1 | Defense 0], the script will prioritize leveling up your Defense.
//
// If you'd only like to max out one specific type of upgrade, you can change this line in the code:
//
//const branch = p.upgradeState.lastIndexOf(Math.min(...p.upgradeState))
//
//If you want to max out Defense only, change it to:
//
//const branch = 0
//
//If you want to max out Range only, change it to:
//
//const branch = 1

//If you want to max out Speed only, change it to:

//const branch = 2

function autoUpgrade() {
    let myPs = df.getAllOwnedPlanets().filter(p => p.owner === df.account)
    let upgradeablePs = myPs.filter(p => df.planetHelper.planetCanUpgrade(p))
    terminal._events.Print(`Upgrade bot checking ${myPs.length} planets...${upgradeablePs.length === 0 ? ' no luck\n' : '\n'}`)
    for (let p of upgradeablePs) {
      terminal._events.Print(`Upgrading L${p.planetLevel} ${p.locationId}\n`, 'Green')
      const branch = p.upgradeState.lastIndexOf(Math.min(...p.upgradeState))
      df.upgrade(p.locationId, branch)
    }
  }

  // In Terminal type:  autoUpgrade()