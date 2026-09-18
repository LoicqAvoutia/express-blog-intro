export const notfound = (req, res, next)=>{
    res.status(404).json({
    status: 'Not Found',
    messagge: 'pagina non trovata'
  })
}