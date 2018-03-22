/**
 * MateriaController
 *
 * @description :: Server-side logic for managing materias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: function (req, res){
		console.log('entra al registro est');
		res.view();
	},


    
    create: function(req,res,next) {
    Materia.create(req.params.all(),function materiaCreado(err,materia) {
			if (err) return next(err);
			res.redirect('/materia/show/'+materia.id);

		});
	},

	show: function(req,res, next){
		//body
		Materia.findOne(req.param('id'), function materiaFounded(err,materia) {
			if (err)
				return next(err);
		
			res.view({
				materia: materia
			});

		});
	},




	edit: function(req,res,next){
		//body
		Materia.findOne(req.param('id'), function materiaFounded(err,materia) {
			if (err)
				return next(err);
			if(!materia)
				return next();
			res.view({
				materia: materia
			});

		});
	},

 
    update:function(req,res,next){
		Materia.update(req.param('id'),req.params.all(),function materiaUpdated(err){
			if (err){
				return res.redirect('/materia/edit/'+req.param('id'));
			}
			res.redirect('/materia/show/'+req.param('id'));
		});
	},


	index: function(req, res, next){
		Materia.find(function materiaFounded(err, materia){
			if(err){
				console.log(err);
				return next(err);
			}
			res.view({
				materia: materia
			});
			
		});

	},

	destroy: function(req, res, next){
		Materia.destroy(req.param('id'),function materiaDestroyed(err, materia){
			if(err){
				console.log(err);
				return next(err);
			}
			res.redirect('/materia/index');
			
		});

	}	
	
};

