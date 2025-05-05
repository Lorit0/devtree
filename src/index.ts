import colors from 'colors'
import { app } from './server'

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(colors.bgBlue.magenta.italic("Server activo en el puerto: " + port))
})

