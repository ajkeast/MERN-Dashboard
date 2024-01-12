import { Member } from '../models/model.members.js';

const member = new Member

export const getMembersAll = async (req, res) => {
    try{
        const result = await member.getAll()
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getMemberById = async (req, res) => {
    const id = req.params.id;
    try{
        const result = await queryMember(id);   // must cast as number 
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

