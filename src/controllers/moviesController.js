// model
const Movies = require('../models/moviesModel')

class MoviesController{

    index(req,res){
        Movies.find()
            .then(result =>{
                res.status(200).json(result)
            })
            .catch(error => {
                res.status(400).json(error)
            })
    }

    show(req,res){
        const { id } = req.params

        Movies.findById(id)
            .then(result => {
                res.status(200).json({result: !result ? 'Filme não encontrado' : result})
            })
            .catch(error => {
                res.status(404).json({message:`Filme de id ${id} não encontrado!` ,error:error} )
            })
    }

    create(req,res){
        const { title, description, image_url, trailer_url} = req.body

        const newMovie = new Movies({
            title,
            description,
            image_url: image_url || 'Não definido',
            trailer_url: trailer_url || 'Não definido'
        })

        newMovie.save()
            .then(result => {
                res.status(201).json({message:'Filme criado com sucesso!', result: result})
            })
            .catch(error => {
                res.status(400).json({message:'Erro ao criar filme', error:error})
            })
    }

    update(req,res){
        const { id } = req.params
        const newData = req.body

        // update
        Movies.findByIdAndUpdate(id, newData)
            .then(result => {
                res.status(200).json({message:`Filme de id ${id} atualizado com sucesso`, result:result})
            })
            .catch(error => {
                res.status(400).json({message:'Erro ao atualizar filme', error:error})
            })
    }

    delete(req,res){
        const { id } = req.params

        Movies.findByIdAndDelete(id)
            .then(result => {
                res.status(200).json({message:'Filme deletado com sucesso', result:result})
            })
            .catch(error => {
                res.status(400).json({message:'Erro ao deletar filme',error:error})
            })
    }

}

module.exports = MoviesController