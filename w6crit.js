const critData = {
    "11": {
        "injury": "Wind Knocked Out",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn.",
        "healtime": "-"
    },
    "12": {
        "injury": "Disorientated",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn.",
        "healtime": "-"
    },
    "13": {
        "injury": "Sprained Wrist",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Drops held item, then -1 to RANGED COMBAT and MELEE COMBAT.",
        "healtime": "D6"
    },
    "14": {
        "injury": "Sprained Ankle",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Falls down, then -1 to DEXTERITY and INFILTRATION.",
        "healtime": "D6"
    },
    "15": {
        "injury": "Concussion",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn, then -1 to all advanced skills.",
        "healtime": "D6"
    },
    "16": {
        "injury": "Bruised Lower Leg",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Falls down, then -1 to DEXTERITY and INFILTRATION.",
        "healtime": "2D6"
    },
    "21": {
        "injury": "Broken Nose",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn, then -2 to MANIPULATION.",
        "healtime": "D6"
    },
    "22": {
        "injury": "Broken Fingers",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Drops held item, then -2 to RANGED COMBAT and MELEE COMBAT.",
        "healtime": "2D6"
    },
    "23": {
        "injury": "Broken Toes",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn, then -2 to DEXTERITY and INFILTRATION.",
        "healtime": "2D6"
    },
    "24": {
        "injury": "Teeth Knocked Out",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn, then -2 to MANIPULATION.",
        "healtime": "2D6"
    },
    "25": {
        "injury": "Groin Hit",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for two turns, then 1 point of damage per FORCE, DEXTERITY, and MELEE COMBAT test.",
        "healtime": "2D6"
    },
    "26": {
        "injury": "Dislocated Shoulder",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn, then -3 to FORCE and MELEE COMBAT.",
        "healtime": "D6"
    },
    "31": {
        "injury": "Broken Ribs",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn, then -2 to DEXTERITY and MELEE COMBAT.",
        "healtime": "2D6"
    },
    "32": {
        "injury": "Broken Arm",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn, then -3 to RANGED COMBAT and MELEE COMBAT.",
        "healtime": "3D6"
    },
    "33": {
        "injury": "Broken Leg",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Falls down, then Movement Rate halved, and -2 to DEXTERITY and INFILTRATION.",
        "healtime": "3D6"
    },
    "34": {
        "injury": "Shredded Ear",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn, then -2 to OBSERVATION. Permanent ugly scar.",
        "healtime": "3D6"
    },
    "35": {
        "injury": "Gouged Eye",
        "fatal": "No",
        "timelimit": "-",
        "effect": "Stunned for one turn, then -2 to RANGED COMBAT and OBSERVATION.",
        "healtime": "3D6"
    },
    "36": {
        "injury": "Punctured Lung",
        "fatal": "Yes",
        "timelimit": "D6 days",
        "effect": "Stunned for one turn, then -3 to DEXTERITY.",
        "healtime": "2D6"
    },
    "41": {
        "injury": "Lacerated Kidney",
        "fatal": "Yes",
        "timelimit": "D6 days",
        "effect": "Stunned for two turns, then 1 point of damage per FORCE, DEXTERITY, or MELEE COMBAT test.",
        "healtime": "3D6"
    },
    "42": {
        "injury": "Crushed Foot",
        "fatal": "Yes",
        "timelimit": "D6 days",
        "effect": "Falls over, then Movement Rate halved, and -3 to DEXTERITY and INFILTRATION.",
        "healtime": "4D6"
    },
    "43": {
        "injury": "Crushed Elbow",
        "fatal": "Yes",
        "timelimit": "D6 days",
        "effect": "Stunned for one turn, then -2 to FORCE and MELEE COMBAT. No use of two-handed weapons.",
        "healtime": "4D6"
    },
    "44": {
        "injury": "Crushed Knee",
        "fatal": "Yes",
        "timelimit": "D6 hours",
        "effect": "Stunned for one turn, falls over, then Movement Rate halved, and -3 to DEXTERITY and INFILTRATION.",
        "healtime": "4D6"
    },
    "45": {
        "injury": "Crushed Face",
        "fatal": "Yes",
        "timelimit": "D6 hours",
        "effect": "Unconscious D6 hours, then -2 to MANIPULATION.",
        "healtime": "4D6"
    },
    "46": {
        "injury": "Pierced Intestines",
        "fatal": "Yes",
        "timelimit": "D6 hours",
        "effect": "Stunned for one turn, then 1 point of damage per hour until first aid is administered.",
        "healtime": "2D6"
    },
    "51": {
        "injury": "Broken Spine",
        "fatal": "Yes",
        "timelimit": "D6 hours",
        "effect": "Unconscious D6 hours, then paralyzed from the waist down. Unless medical aid is given during the healing time, the paralysis is permanent.",
        "healtime": "4D6"
    },
    "52": {
        "injury": "Broken Neck",
        "fatal": "Yes",
        "timelimit": "D6 hours",
        "effect": "Unconscious D6 hours, then paralyzed from the neck down. Unless medical aid is given during the healing time, the paralysis is permanent.",
        "healtime": "4D6"
    },
    "53": {
        "injury": "Bleeding Gut",
        "fatal": "Yes",
        "timelimit": "D6 minutes",
        "effect": "1 point of damage per turn until first aid is given.",
        "healtime": "D6"
    },
    "54": {
        "injury": "Internal Bleeding",
        "fatal": "Yes, -1",
        "timelimit": "D6 minutes",
        "effect": "Unconscious D6 hours, then 1 point of damage per FORCE, DEXTERITY, or MELEE COMBAT test.",
        "healtime": "2D6"
    },
    "55": {
        "injury": "Severed Artery (Arm)",
        "fatal": "Yes, -1",
        "timelimit": "D6 minutes",
        "effect": "Unconscious D6 hours, then -1 to DEXTERITY.",
        "healtime": "D6"
    },
    "56": {
        "injury": "Severed Artery (Leg)",
        "fatal": "Yes, -1",
        "timelimit": "D6 minutes",
        "effect": "Unconscious D6 hours, then -2 to DEXTERITY.",
        "healtime": "D6"
    },
    "61": {
        "injury": "Destroyed Arm",
        "fatal": "Yes, -1",
        "timelimit": "D6 minutes",
        "effect": "Unconscious D6 hours, then -2 to DEXTERITY. The arm is permanently lost. No use of two-handed weapons.",
        "healtime": "3D6"
    },
    "62": {
        "injury": "Destroyed Leg",
        "fatal": "Yes, -1",
        "timelimit": "D6 minutes",
        "effect": "Unconscious D6 hours, then -2 to DEXTERITY. The leg is permanently lost. Movement Rate is halved.",
        "healtime": "3D6"
    },
    "63": {
        "injury": "Severed Jugular",
        "fatal": "Yes, -1",
        "timelimit": "D6 minutes",
        "effect": "Unconscious D6 hours, then -1 to DEXTERITY.",
        "healtime": "D6"
    },
    "64": {
        "injury": "Severed Aorta",
        "fatal": "Yes, -1",
        "timelimit": "D6 minutes",
        "effect": "Unconscious D6 hours, then -2 to DEXTERITY.",
        "healtime": "2D6"
    },
    "65": {
        "injury": "Pierced Heart",
        "fatal": "Yes",
        "timelimit": "-",
        "effect": "Your heart beats one final time. Create a new PC.",
        "healtime": "-"
    },
    "66": {
        "injury": "Crushed Skull",
        "fatal": "Yes",
        "timelimit": "-",
        "effect": "You are instantly killed. Your adventure ends here. Create a new PC.",
        "healtime": "-"
    },
};

/**
 * w6crit
 * @param {Discord.Message} msg 
 * @returns {Promise}
 */
module.exports = function w6crit(msg) {

    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const d66 = `${dice1}${dice2}`;
    const crit = critData[d66];

    console.log(new Date().toISOString(), 'Bot critted', d66);

    return msg.reply([
        '`/d6crit` ⇒ ' + `${d66} – **${crit.injury}**`,
        `*${crit.effect}*`,
        `*Fatal: ${crit.fatal}, Healtime: ${crit.healtime}, Time Limit: ${crit.timelimit}*`,
    ].join('\n'));
}