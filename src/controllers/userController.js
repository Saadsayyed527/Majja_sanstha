const adminController = (req,res)=>{
    res.json({message:"Welcome Admin"});
}

const judgeController = (req,res)=>{
    res.json({message:"Welcome Judge!"});
}

const individualParticipantController = (req,res)=>{
    res.json({message:"Welcome Participant!"});
}

// Please accept these long names for now. We could definitely change to something better.
const groupManagingParticipantController = (req,res)=>{
    res.json({message:"Welcome Group Participation Manager!"});
}

module.exports = {adminController, judgeController, individualParticipantController, groupManagingParticipantController};