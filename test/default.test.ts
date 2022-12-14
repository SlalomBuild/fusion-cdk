import { AwsProvider } from "@cdktf/provider-aws";
import { TerraformStack, Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { fusionaws } from "../src";

Testing.setupJest();

describe("AWS", () => {
  describe("Security group", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");
    new AwsProvider(stack, "provider");

    it("should produce valid terraform", () => {
      const properties: fusionaws.SecurityGroupProps = {
        name: "my-security-group",
      };

      new fusionaws.SecurityGroup(stack, "test-security-group", properties);
      expect(Testing.fullSynth(stack)).toBeValidTerraform();
    });
  });
});
