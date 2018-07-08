import rp from "request-promise";

export const token = async (req, res, next) => {
  let code = req.query.code || null;
  const authOptions = {
    method: "POST",
    uri: "https://secure.meetup.com/oauth2/access",
    form: {
      client_id: process.env.MEETUP_CLIENT_ID,
      client_secret: process.env.MEETUP_CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: process.env.FRONTEND_CALLBACK_URI,
      code
    },
    headers: {
      Authorization:
        "bearer " +
        new Buffer(
          process.env.MEETUP_CLIENT_ID + ":" + process.env.MEETUP_CLIENT_SECRET
        ).toString("base64")
    },
    json: true
  };

  try {
    const result = await rp(authOptions);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something wrong", error });
  }
};
