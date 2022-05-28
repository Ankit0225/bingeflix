import {
  NumberInput,
  TextInput,
  Drawer,
  Button,
  Group,
  Paper,
} from "@mantine/core";
import Joi from "joi";
import { useForm, joiResolver } from "@mantine/form";
import React, { useState } from "react";

const Profile = () => {
  const [opened, setOpened] = useState(false);
 
  // Data will be embedded in console
  const schema = Joi.object({
    name: Joi.string().min(2).message("Name should have at least 2 letters"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .message("Invalid email"),
    age: Joi.number()
      .min(18)
      .message("You must be at least 18 to create an account"),
  });

  const form = useForm({
    schema: joiResolver(schema),
    initialValues: {
      name: "",
      email: "",
      age: 18,
    },
  });
  return (
    <>
      <div>
        <span className="pageTitle">Profile</span>
        <Drawer
          opened={opened}
          position="top"
          onClose={() => setOpened(false)}
          padding="xl"
          size="88%"
          overlayOpacity={0.55}
          overlayBlur={3}
          transitionDuration={1000}
        >
          {/* Drawer content */}

          {/* <div className="data-show">Profile</div> */}

          <Paper shadow="lg" p="md">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
                required
                label="Email"
                placeholder="example@mail.com"
                {...form.getInputProps("email")}
              />
              <TextInput
                required
                label="Name"
                placeholder="John Doe"
                mt="sm"
                {...form.getInputProps("name")}
              />
              <NumberInput
                required
                label="Age"
                placeholder="Your age"
                mt="sm"
                {...form.getInputProps("age")}
              />
              <Group position="right" mt="xl">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Paper>
          <div
            style={{
              textAlign: "center",
              marginTop: "2%",
              fontSize: "50px",
              cursor: "pointer",
              color: "black",
            }}
          >
            Work In progress
          </div>
        </Drawer>

        <Group position="center">
          <div
            style={{
              marginTop: "20%",
              marginBottom: "50%",
              fontSize: "50px",
              cursor: "pointer",
              color: "black",
            }}
            onClick={() => setOpened(true)}
          >
            Click Here to Update or Add Profile
          </div>
        </Group>
      </div>
    </>
  );
};

export default Profile;
