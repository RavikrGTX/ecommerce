export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (
      !req.user ||
      !allowedRoles.map(r => r.toLowerCase()).includes(req.user.role.toLowerCase())
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }
    next();
  };
};
