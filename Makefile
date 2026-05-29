REPOSITORY = dockerbox/mock-spec-demo-relay

login:
	AWS_PROFILE=sst aws ecr get-login-password --region us-east-2 | podman login --username AWS --password-stdin 021159556063.dkr.ecr.us-east-2.amazonaws.com

include ~/apps/mush/mush.mk
