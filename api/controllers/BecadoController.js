/**
 * BecadoController
 *
 * @description :: Server-side logic for managing becadoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    indexMateriadeLosBecados: function(req, res){
		var query ='SELECT Materia.Nombre, p.Nombres from Persona p'+
        'inner join Estudiante es on p.idPersona=es.Persona_idPersona'+
        'inner join Becado be on be.Estudiante_idEstudiante=es.idEstudiante'+
		'inner join SeccionEstudiante se on se.Estudiante_idEstudiante =es.idEstudiante'+
		'inner join Seccion sec on sec.idSeccion=se.Seccion_idSeccion'+
		'inner join Materia  on Materia.idMateria=sec.Materia_idMateria'+
		'where be.idBecado='+req.param('id')
		Becado.query(query, [], function(err,becados){
			if(err){
			 res.serverError(err);
		}
		if(!becados){
			becados = [];
		}
		res.view('becado/materiasbecados',{becados, becados, idBecado: req.param('id') });
		});

    },
    
    'new': function(req,res,err){
		Estudiante.findOne(req.param('estudiante'),function estudianteFounded(err,estudiante){
			if (err) return next(err);
			if (!estudiante) return next();
			res.view({
				estudiante:estudiante
			});
		});


	},

	create: function(req,res,next) {
		Becado.create(req.params.all(),function becadoCreado(err,becado) {
			if (err) return next(err);
			res.redirect('/estudiante/show/'+becado.estudiante);

		});
	},

	 display: function(req, res){
		becado.query('SELECT Becado.disciplina from Becado INNER JOIN Estudiante on Becado.estudiante = ?',
		[estudiante],function(err, rawResults){
			if (err) {return res.serverError(err);}
			sails.log(rawResults);
		})

	}

	
};

