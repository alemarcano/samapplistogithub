/**
 * EstudianteController
 *
 * @description :: Server-sidEstudiante logic for managing estudiantes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    'new': function(req,res,err){
		Persona.findOne(req.param('persona'),function foundPersona (err,persona){
			if (err) return next(err);
			if (!persona) return next();
			res.view({
				persona:persona
			});
		});


	},

	create: function(req,res,next) {
		Estudiante.create(req.params.all(),function estudianteCreado(err,estudiante) {
			if (err) return next(err);
			res.redirect('/persona/show/'+estudiante.persona);

		});
	},


	index: function(req,res){
		//body
		Estudiante.find().populate('persona').exec(function(err,estudiantes){
			if(err){
					return res.serverError(err);
			}
			if(!estudiantes){
				estudiantes = [];
			}
			sails.log(estudiantes);
			res.view('estudiante/show', { estudiantes:estudiantes});
		});
	},


	indexEstudianteMateria: function(req, res){
		var query ='SELECT Materia.Nombre from Persona p'+
		'inner join Estudiante es on p.idPersona=es.Persona_idPersona'+
		'inner join SeccionEstudiante se on se.Estudiante_idEstudiante =es.idEstudiante'+
		'inner join Seccion sec on sec.idSeccion=se.Seccion_idSeccion'+
		'inner join Materia  on Materia.idMateria=sec.Materia_idMateria'+
		'where es.idEstudiante='+req.param('id')
		Estudiante.query(query, [], function(err,estudiantes){
			if(err){
			 res.serverError(err);
		}
		if(!estudiantes){
			estudiantes = [];
		}
		res.view('estudiante/materias',{estudiantes, estudiantes, id: req.param('id') });
		});

	}


	
};

