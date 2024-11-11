import app from "../app/app";



const PORT=5000



try {
    app.listen({ port: PORT },()=>{
        console.log({
            message: `Servidor rodando na porta ${PORT}...`,
            host:`http://localhost:${PORT}`
        })
    })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }

