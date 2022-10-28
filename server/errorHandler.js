const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 400
    res.status(statusCode)

    res.json({
        message : err.message,
        stack   : err.stack,
    })
}

export default errorHandler;