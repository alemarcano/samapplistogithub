/**
 * PersonaController
 *
 * @description :: Server-side logic for managing personas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: function (req, res){
		console.log('entra al registro est');
		res.view();
	},


    
    create: function(req,res,next) {
    Persona.create(req.params.all(),function personaCreado(err,persona) {
			if (err) return next(err);
			res.redirect('/persona/show/'+persona.id);

		});
	},

	show: function(req,res, next){
		//body
		Persona.findOne(req.param('id')).populateAll().exec(function personaFounded(err,persona) {
			if (err)
				return next(err);
		
			res.view({
				persona: persona
			});

		});
	},


	menu: function(req,res,next){
        Persona.findOne({cedula:req.param('cedulapersona')}).exec(function(err,persona){
            if(err){
                return res.json(500,{error: 'Some error ocurred'});
                sails.log('El id introducido no existe en la BD');
            }
            sails.log(persona)
           res.view({
        	persona:persona
           });
        })
	},


	edit: function(req,res,next){
		//body
		Persona.findOne(req.param('id'), function personaFounded(err,persona) {
			if (err)
				return next(err);
			if(!persona)
				return next();
			res.view({
				persona: persona
			});

		});
	},

 
    update:function(req,res,next){
		Persona.update(req.param('id'),req.params.all(),function personaUpdated(err){
			if (err){
				return res.redirect('/persona/edit/'+req.param('id'));
			}
			res.redirect('/persona/show/'+req.param('id'));
		});
	},


	index: function(req, res, next){
		Persona.find(function personaFounded(err, persona){
			if(err){
				console.log(err);
				return next(err);
			}
			res.view({
				persona: persona
			});
			
		});

	},

	destroy: function(req, res, next){
		Persona.destroy(req.param('id'),function personaDestroyed(err, persona){
			if(err){
				console.log(err);
				return next(err);
			}
			res.redirect('/persona/index');
			
		});

	}	
};

