/**
 * JobsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getJobs: function(req, res){
        sails.models.jobs.find({}).exec((err,jobs) => {
        if(err){
            throw err;
        }
        jobs.length===0
        ?
            res.send({ error: 'Jobs table does not have any records'})
        :
            //res.send(jobs);
            res.view('pages/viewJobs', {jobs: jobs});
        });
    },

    getJobsById: function(req, res){
        sails.models.jobs.find({}).exec((err,jobs) => {
        if(err){
            throw err;
        }
        jobs.length===0
        ?
            res.send({ error: 'Jobs table does not have any records'})
        :
            res.send(jobs);
            //res.view('pages/viewParts', {parts: parts});
        });
    }

};

