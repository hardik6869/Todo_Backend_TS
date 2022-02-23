const errorHandler = (
    err: {message: string; stack: string},
    req: any,
    res: {
        statusCode: number;
        status: (arg0: number) => void;
        json: (arg0: {message: string; stack: string | null}) => void;
    },
    next: any,
): void => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

export default errorHandler;
